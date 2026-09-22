import { NextResponse } from 'next/server';
import GHLClient from '@/lib/ghl-client';

// Field mappings: formType → { formFieldName: ghlCustomFieldKey }
const fieldMappings: Record<string, Record<string, string>> = {
  'hero-quote': {
    sms: 'sms_consent',
  },
  'sidebar-quote': {
    sms: 'sms_consent',
  },
  'inspection-modal': {
    message: 'contact_message',
    sms: 'sms_consent',
  },
  'contact': {
    message: 'contact_message',
    sms: 'sms_consent',
  },
};

export async function POST(request: Request) {
  try {
    let formData: Record<string, string | boolean>;
    try {
      formData = await request.json();
    } catch {
      return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 });
    }

    // Honeypot check — bots fill hidden fields, humans don't
    if (formData.company) {
      return NextResponse.json({ success: true }); // silent success so bots don't retry
    }

    // Turnstile verification
    const turnstileToken = formData['cf-turnstile-response'];
    if (!turnstileToken) {
      return NextResponse.json({ success: false, error: 'Bot verification failed' }, { status: 400 });
    }
    const tsRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: turnstileToken as string,
      }),
    });
    const tsResult = await tsRes.json();
    if (!tsResult.success) {
      return NextResponse.json({ success: false, error: 'Bot verification failed' }, { status: 403 });
    }

    // Required field validation
    const requiredFields = ['fname', 'lname', 'phone', 'email', 'address'];
    const missing = requiredFields.filter(f => {
      const val = formData[f];
      return !val || (typeof val === 'string' && !val.trim());
    });
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // Server-side format validation (mirrors client-side rules)
    const fname = (formData.fname as string).trim();
    const lname = (formData.lname as string).trim();
    if (fname.length < 2 || lname.length < 2) {
      return NextResponse.json({ success: false, error: 'Name must be at least 2 characters' }, { status: 400 });
    }

    const phoneDigits = (formData.phone as string).replace(/\D/g, '');
    const normalizedPhone = phoneDigits.startsWith('1') && phoneDigits.length === 11 ? phoneDigits.slice(1) : phoneDigits;
    if (normalizedPhone.length !== 10 || normalizedPhone[0] === '0' || normalizedPhone[0] === '1') {
      return NextResponse.json({ success: false, error: 'Enter a valid 10-digit phone number' }, { status: 400 });
    }

    const emailVal = (formData.email as string).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal)) {
      return NextResponse.json({ success: false, error: 'Enter a valid email address' }, { status: 400 });
    }

    const addressVal = (formData.address as string).trim();
    if (!/\d/.test(addressVal) || (addressVal.match(/,/g) || []).length < 2 || !/\b[A-Z]{2}\b/.test(addressVal) || !/\b\d{5}\b/.test(addressVal)) {
      return NextResponse.json({ success: false, error: 'Use format: 123 Main St, City, TX 76036' }, { status: 400 });
    }

    const formType = (formData.formType as string) || 'contact';
    const mapping = fieldMappings[formType] || {};

    // Build custom fields from non-standard form fields
    const customFields: Record<string, string | boolean> = {};

    // Service type always goes to a custom field
    if (formData.service) {
      customFields['service_interest'] = formData.service as string;
    }

    // Map remaining fields using the form-specific mapping
    const standardFields = ['formType', 'fname', 'lname', 'email', 'phone', 'address', 'service', 'company', 'cf-turnstile-response'];
    Object.entries(formData).forEach(([key, value]) => {
      if (standardFields.includes(key)) return;
      if (value === undefined || value === null || value === '') return;
      if (key === 'consent' || key === 'sms') {
        customFields[mapping[key] || `contact_${key}`] = value === true || value === 'on' ? 'Yes' : 'No';
      } else {
        customFields[mapping[key] || key] = value as string;
      }
    });

    let ghlClient: GHLClient;
    try {
      ghlClient = new GHLClient();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to initialize GHL client';
      return NextResponse.json({ success: false, error: msg }, { status: 500 });
    }

    // Parse address: "123 Main St, City, TX 76036" into separate GHL fields
    // Anchors on "TX 76036" pattern and works backwards to split street/city
    const addressRaw = (formData.address as string).trim();
    const stateZipMatch = addressRaw.match(/\b([A-Z]{2})\s+(\d{5})\b/);
    const state = stateZipMatch ? stateZipMatch[1] : undefined;
    const postalCode = stateZipMatch ? stateZipMatch[2] : undefined;

    // Everything before "TX 76036" is "street, city"
    const beforeStateZip = stateZipMatch
      ? addressRaw.slice(0, stateZipMatch.index).replace(/[,\s]+$/, '').trim()
      : addressRaw;

    // Split by last comma to separate street from city
    const lastComma = beforeStateZip.lastIndexOf(',');
    const street = lastComma > -1 ? beforeStateZip.slice(0, lastComma).trim() : beforeStateZip;
    const city = lastComma > -1 ? beforeStateZip.slice(lastComma + 1).trim() || undefined : undefined;

    const result = await ghlClient.submitContact({
      firstName: formData.fname as string,
      lastName: formData.lname as string,
      email: formData.email as string,
      phone: formData.phone as string,
      address1: street,
      city,
      state,
      postalCode,
      tags: ['website-lead', formType],
      customFields,
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, contactId: result.contactId });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
