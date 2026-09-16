"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
  consent: false,
};

interface ServicePageFormProps {
  heading?: string;
  description?: string;
  defaultService?: string;
  serviceOptions?: { value: string; label: string }[];
}

const defaultServiceOptions = [
  { value: "replacement", label: "Roof Replacement" },
  { value: "inspection", label: "Roof Inspection" },
  { value: "repair", label: "Roof Repair" },
  { value: "storm", label: "Storm Damage" },
  { value: "commercial", label: "Commercial Roofing" },
  { value: "tarping", label: "Emergency Tarping" },
];

const inputClasses =
  "w-full bg-transparent border-b border-white/20 py-3 text-brand-white font-medium focus:outline-none focus:border-brand-aqua transition-colors rounded-none placeholder-white/30 uppercase text-xs tracking-wider";

export default function ServicePageForm({
  heading = "Need a New Roof?",
  description = "Schedule a free, honest inspection to find out exactly what your property needs.",
  defaultService = "replacement",
  serviceOptions = defaultServiceOptions,
}: ServicePageFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    service: defaultService,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace("sp-", "")]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => router.push("/confirmation"), 1500);
  };

  return (
    <div className="sticky top-32 bg-brand-charcoal p-8 md:p-10 border border-white/10 shadow-2xl">
      <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-white uppercase mb-2">
        {heading}
      </h3>
      <p className="text-brand-white/70 text-sm mb-8">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          id="sp-fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First Name"
          className={inputClasses}
          required
        />
        <input
          type="text"
          id="sp-lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last Name"
          className={inputClasses}
          required
        />
        <input
          type="tel"
          id="sp-phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className={inputClasses}
          required
        />
        <input
          type="email"
          id="sp-email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={inputClasses}
          required
        />
        <input
          type="text"
          id="sp-address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Property Address / ZIP"
          className={inputClasses}
          required
        />

        <div className="relative">
          <select
            id="sp-service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            {serviceOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="text-brand-black bg-brand-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-white">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <textarea
          id="sp-message"
          rows={2}
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (Optional)"
          className={`${inputClasses} resize-none`}
        />

        <div className="pt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, consent: e.target.checked }))
              }
              className="mt-1 accent-brand-aqua"
            />
            <span className="text-[10px] text-brand-white/50 leading-relaxed uppercase tracking-wider">
              I agree to the Privacy Policy and consent to receive SMS
              communications regarding my project.
            </span>
          </label>
        </div>

        {status === "error" && (
          <p className="text-red-400 text-xs font-sans">
            Please fill in all required fields.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-brand-aqua text-brand-black py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white transition-colors mt-2 disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Request Inspection"}
        </button>
      </form>
    </div>
  );
}
