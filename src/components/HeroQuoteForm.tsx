"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  address: string;
  service: string;
}

const initialFormData: FormData = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  address: "",
  service: "",
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

export default function HeroQuoteForm() {
  const [activeTab, setActiveTab] = useState<Tab>("roofing");
  const [roofingForm, setRoofingForm] = useState<FormData>(initialFormData);
  const [remodelingForm, setRemodelingForm] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const formData = activeTab === "roofing" ? roofingForm : remodelingForm;
  const setFormData = activeTab === "roofing" ? setRoofingForm : setRemodelingForm;
  const serviceOptions = activeTab === "roofing" ? roofingOptions : remodelingOptions;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fname || !formData.lname || !formData.phone || !formData.email || !formData.address) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setStatus("idle");
  };

  const pillToggle = (
    <div className="relative bg-brand-softGray rounded-full p-1 flex mb-6">
      {/* Sliding pill background */}
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

  if (status === "success") {
    return (
      <div className="bg-brand-white shadow-xl rounded-[10px] p-8 lg:p-10">
        {pillToggle}
        <div className="flex flex-col items-center justify-center text-center py-4">
          <h3 className="font-heading font-black text-2xl text-brand-black mb-3">THANK YOU!</h3>
          <p className="text-brand-muted font-sans text-sm mb-6">
            We&rsquo;ll contact you shortly to schedule your{" "}
            {activeTab === "roofing" ? "free inspection" : "consultation"}.
          </p>
          <button
            type="button"
            onClick={() => { setStatus("idle"); setFormData(initialFormData); }}
            className="border border-brand-black text-brand-black px-6 py-3 rounded-[10px] font-heading font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-white shadow-xl rounded-[10px] p-8 lg:p-10">
      {pillToggle}

      {/* Sliding form container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-premium"
          style={{
            width: "200%",
            transform: activeTab === "roofing" ? "translateX(0)" : "translateX(-50%)",
          }}
        >
          {/* Roofing Form */}
          <div className="w-1/2 pr-4">
            <FormFields
              formData={roofingForm}
              onChange={(e) => {
                setRoofingForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
                if (status === "error") setStatus("idle");
              }}
              onSubmit={handleSubmit}
              status={activeTab === "roofing" ? status : "idle"}
              serviceOptions={roofingOptions}
              submitLabel="Request My Inspection"
            />
          </div>

          {/* Remodeling Form */}
          <div className="w-1/2 pl-4">
            <FormFields
              formData={remodelingForm}
              onChange={(e) => {
                setRemodelingForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
                if (status === "error") setStatus("idle");
              }}
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
  formData,
  onChange,
  onSubmit,
  status,
  serviceOptions,
  submitLabel,
}: {
  formData: FormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
  status: string;
  serviceOptions: { value: string; label: string }[];
  submitLabel: string;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" id="fname" value={formData.fname} onChange={onChange} className={inputClasses} placeholder="First Name *" required />
        <input type="text" id="lname" value={formData.lname} onChange={onChange} className={inputClasses} placeholder="Last Name *" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="tel" id="phone" value={formData.phone} onChange={onChange} className={inputClasses} placeholder="Phone *" required />
        <input type="email" id="email" value={formData.email} onChange={onChange} className={inputClasses} placeholder="Email *" required />
      </div>
      <input type="text" id="address" value={formData.address} onChange={onChange} className={inputClasses} placeholder="Property Address / ZIP *" required />
      <div className="relative">
        <select
          id="service"
          value={formData.service}
          onChange={onChange}
          className={`${inputClasses} appearance-none cursor-pointer`}
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
      {status === "error" && (
        <p className="text-red-500 text-xs font-sans">Please fill in all required fields.</p>
      )}
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
