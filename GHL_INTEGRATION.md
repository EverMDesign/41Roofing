# GoHighLevel Integration

This project submits form data to GoHighLevel (GHL) via the LeadConnector API.

## Architecture

Form -> `POST /api/submit-form` -> `src/lib/ghl-client.ts` -> GHL `/contacts/upsert`

## Environment Variables

| Variable | Description |
|---|---|
| `PIT_TOKEN` | Private Integration Token from GHL -> Settings -> Integrations |
| `LOCATION_ID` | Subaccount/Location ID from GHL -> Settings -> Business Profile |
| `GHL_API_BASE` | API base URL (default: `https://services.leadconnectorhq.com`) |

## Forms Connected

| Form | File | formType | Extra Fields |
|---|---|---|---|
| HeroQuoteForm | `src/components/HeroQuoteForm.tsx` | `hero-quote` | service |
| SidebarQuoteForm | `src/components/SidebarQuoteForm.tsx` | `sidebar-quote` | service |
| ServicePageForm | `src/components/ServicePageForm.tsx` | `service-page` | message, consent |
| InspectionModal | `src/components/InspectionModal.tsx` | `inspection-modal` | message |
| Contact | `src/components/sections/Contact.tsx` | `contact` | message, sms |

All forms send: fname, lname, phone, email, address, service.

## GHL Custom Fields Required

Create these in **GHL -> Settings -> Custom Fields** as TEXT fields unless noted.

| Field Key | GHL Field Name | Type | Used By |
|---|---|---|---|
| `service_interest` | Service Interest | TEXT | All forms |
| `contact_message` | Contact Message | TEXT (large) | ServicePageForm, InspectionModal, Contact |
| `contact_consent` | Contact Consent | TEXT | ServicePageForm |
| `contact_sms_consent` | SMS Consent | TEXT | Contact |

## Auto-Tags

Every submission is tagged with:
- `website-lead`
- The form type (e.g., `hero-quote`, `contact`, `sidebar-quote`)

## EverReach Tracking

The tracking script is loaded in `src/app/layout.tsx`:
```html
<script src="https://api.everreach.link/js/external-tracking.js" data-tracking-id="tk_7a7ed648e29d43ee8cdae8eaa43adca9" />
```

## Adding a New Form

1. Build the form with controlled inputs (useState)
2. Import validators from `@/lib/validation`
3. In handleSubmit: validate all fields, then `fetch("/api/submit-form", { method: "POST", body: JSON.stringify({ ...formData, formType: "your-form-type" }) })`
4. Add the formType to `fieldMappings` in `src/app/api/submit-form/route.ts`
5. Create any new custom fields in GHL

## Testing

```bash
curl -X POST http://localhost:3000/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{"formType":"contact","fname":"Test","lname":"User","email":"test@example.com","phone":"555-555-0100","address":"123 Main St","service":"inspection"}'
```

Check GHL -> Contacts for the new contact.

## Common Issues

- **Missing credentials error**: Check `.env.local` has real values
- **Custom fields not saving**: The field key must exist in GHL -> Custom Fields first
- **Version header error**: `ghl-client.ts` always sends `Version: 2021-07-28` -- don't remove it
