"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { validateName, validatePhone, validateEmail, validateAddress } from "@/lib/validation";
import Turnstile from "@/components/Turnstile";

interface FormData {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  sms: boolean;
}

const initialFormData: FormData = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  sms: false,
};

const roofingOptions = [
  { value: "inspection", label: "Roof Inspection" },
  { value: "repair", label: "Roof Repair" },
  { value: "replacement", label: "Roof Replacement" },
  { value: "storm", label: "Storm Damage" },
  { value: "tarping", label: "Emergency Tarping" },
  { value: "commercial", label: "Commercial Roofing" },
];

const remodelingOptions = [
  { value: "gutters", label: "Gutters" },
  { value: "remodeling", label: "Remodeling" },
  { value: "exterior-repairs", label: "Exterior Repairs" },
  { value: "restoration", label: "Interior & Exterior Restoration" },
  { value: "property-repairs", label: "Property Repairs" },
  { value: "painting", label: "Interior & Exterior Painting" },
];

const inputClasses =
  "w-full bg-brand-softGray border border-brand-border rounded-[10px] px-4 py-3 text-brand-charcoal placeholder-brand-muted focus:outline-none focus:border-brand-aqua transition-colors font-sans text-sm";

type Tab = "roofing" | "remodeling";

interface QuoteFormProps {
  variant: "hero" | "sidebar";
  formType: string;
  defaultTab?: Tab;
  defaultService?: string;
}

export default function QuoteForm({
  variant,
  formType,
  defaultTab = "roofing",
  defaultService = "",
}: QuoteFormProps) {
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
  const [roofingForm, setRoofingForm] = useState<FormData>({
    ...initialFormData,
    service: defaultTab === "roofing" ? defaultService : "",
  });
  const [remodelingForm, setRemodelingForm] = useState<FormData>({
    ...initialFormData,
    service: defaultTab === "remodeling" ? defaultService : "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const handleToken = useCallback((token: string) => setTurnstileToken(token), []);

  const formData = activeTab === "roofing" ? roofingForm : remodelingForm;
  const setFormData = activeTab === "roofing" ? setRoofingForm : setRemodelingForm;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    const fnameErr = validateName(formData.fname);
    if (fnameErr) newErrors.fname = fnameErr;
    const lnameErr = validateName(formData.lname);
    if (lnameErr) newErrors.lname = lnameErr;
    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;
    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;
    const addressErr = validateAddress(formData.address);
    if (addressErr) newErrors.address = addressErr;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType, "cf-turnstile-response": turnstileToken }),
      });
      const result = await res.json();
      if (result.success) {
        window.location.href = "/confirmation";
      } else {
        console.error("Form error:", result.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setStatus("idle");
  };

  const wrapperClass = variant === "sidebar"
    ? "sticky top-32 bg-brand-white shadow-xl rounded-[10px] p-8 lg:p-10"
    : "bg-brand-white shadow-xl rounded-[10px] p-8 lg:p-10";

  const pillToggle = (
    <div className="relative bg-brand-softGray rounded-full p-1 flex mb-6">
      <div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-aqua rounded-full transition-transform duration-300 ease-premium"
        style={{ transform: activeTab === "roofing" ? "translateX(0)" : "translateX(calc(100% + 8px))" }}
      />
      <button
        type="button"
        onClick={() => switchTab("roofing")}
        className={`relative z-10 flex-1 py-2.5 text-center font-heading font-bold text-xs tracking-widest uppercase transition-colors duration-300 rounded-full ${
          activeTab === "roofing" ? "text-brand-black" : "text-brand-muted hover:text-brand-charcoal"
        }`}
      >
        Roofing
      </button>
      <button
        type="button"
        onClick={() => switchTab("remodeling")}
        className={`relative z-10 flex-1 py-2.5 text-center font-heading font-bold text-xs tracking-widest uppercase transition-colors duration-300 rounded-full ${
          activeTab === "remodeling" ? "text-brand-black" : "text-brand-muted hover:text-brand-charcoal"
        }`}
      >
        Remodeling
      </button>
    </div>
  );

  const idPrefix = `${variant}-`;

  return (
    <div className={wrapperClass}>
      {pillToggle}

      <Turnstile onToken={handleToken} />

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-premium"
          style={{
            width: "200%",
            transform: activeTab === "roofing" ? "translateX(0)" : "translateX(-50%)",
          }}
        >
          <div className="w-1/2 pr-4">
            <FormFields
              formId={`${idPrefix}roofing-form`}
              formData={roofingForm}
              errors={activeTab === "roofing" ? errors : {}}
              onChange={(e) => {
                setRoofingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                if (status === "error") setStatus("idle");
                if (errors[e.target.name]) setErrors((prev) => { const next = { ...prev }; delete next[e.target.name]; return next; });
              }}
              onCheckbox={(checked) => setRoofingForm((prev) => ({ ...prev, sms: checked }))}
              onSubmit={handleSubmit}
              status={activeTab === "roofing" ? status : "idle"}
              serviceOptions={roofingOptions}
              submitLabel="Request My Inspection"
            />
          </div>

          <div className="w-1/2 pl-4">
            <FormFields
              formId={`${idPrefix}remodeling-form`}
              formData={remodelingForm}
              errors={activeTab === "remodeling" ? errors : {}}
              onChange={(e) => {
                setRemodelingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                if (status === "error") setStatus("idle");
                if (errors[e.target.name]) setErrors((prev) => { const next = { ...prev }; delete next[e.target.name]; return next; });
              }}
              onCheckbox={(checked) => setRemodelingForm((prev) => ({ ...prev, sms: checked }))}
              onSubmit={handleSubmit}
              status={activeTab === "remodeling" ? status : "idle"}
              serviceOptions={remodelingOptions}
              submitLabel="Request My Consultation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FormFields({
  formId,
  formData,
  errors,
  onChange,
  onCheckbox,
  onSubmit,
  status,
  serviceOptions,
  submitLabel,
}: {
  formId: string;
  formData: FormData;
  errors: Record<string, string>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckbox: (checked: boolean) => void;
  onSubmit: (e: FormEvent) => void;
  status: string;
  serviceOptions: { value: string; label: string }[];
  submitLabel: string;
}) {
  const fieldClass = (field: string) =>
    errors[field]
      ? `${inputClasses} !border-red-400 focus:!border-red-500`
      : inputClasses;

  return (
    <form id={formId} onSubmit={onSubmit} className="flex flex-col gap-4">
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input type="text" name="fname" value={formData.fname} onChange={onChange} className={fieldClass("fname")} placeholder="First Name *" required />
          {errors.fname && <p className="text-red-500 text-xs mt-1">{errors.fname}</p>}
        </div>
        <div>
          <input type="text" name="lname" value={formData.lname} onChange={onChange} className={fieldClass("lname")} placeholder="Last Name *" required />
          {errors.lname && <p className="text-red-500 text-xs mt-1">{errors.lname}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input type="tel" name="phone" value={formData.phone} onChange={onChange} className={fieldClass("phone")} placeholder="Phone *" required />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={onChange} className={fieldClass("email")} placeholder="Email *" required />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <input type="text" name="address" value={formData.address} onChange={onChange} className={fieldClass("address")} placeholder="123 Main St, City, TX 76036 *" required />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
      </div>
      <div className="relative">
        <select
          name="service"
          value={formData.service}
          onChange={onChange}
          className={`${fieldClass("service")} appearance-none cursor-pointer`}
        >
          <option value="" disabled className="text-brand-black">Service Needed</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-brand-black">{opt.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="flex items-start gap-3 mt-1">
        <input
          type="checkbox"
          id={`${formId}-sms`}
          name="sms"
          checked={formData.sms}
          onChange={(e) => onCheckbox(e.target.checked)}
          className="mt-1 accent-brand-aqua cursor-pointer w-4 h-4"
        />
        <label htmlFor={`${formId}-sms`} className="text-[10px] text-brand-muted font-sans leading-tight cursor-pointer">
          I consent to receive SMS notifications, alerts &amp; occasional marketing communication from 41
          Roofing &amp; Restoration. View Privacy Policy and Terms of Service.
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-black text-brand-white py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
