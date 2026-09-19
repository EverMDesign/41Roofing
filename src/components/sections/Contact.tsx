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
  message: string;
  sms: boolean;
}

const initialFormData: FormData = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
  sms: false,
};

const serviceOptions = [
  { value: "inspection", label: "Roof Inspection" },
  { value: "repair", label: "Roof Repair" },
  { value: "replacement", label: "Roof Replacement" },
  { value: "storm", label: "Storm Damage" },
  { value: "tarping", label: "Emergency Tarping" },
  { value: "commercial", label: "Commercial Roofing" },
  { value: "restoration", label: "Restoration" },
  { value: "remodeling", label: "Remodeling" },
  { value: "other", label: "Other" },
];

const inputClasses =
  "w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg";

const labelClasses =
  "absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const handleToken = useCallback((token: string) => setTurnstileToken(token), []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { id, value } = target;
    const isCheckbox = target instanceof HTMLInputElement && target.type === "checkbox";
    setFormData((prev) => ({
      ...prev,
      [id]: isCheckbox ? (target as HTMLInputElement).checked : value,
    }));
    if (formStatus === "error") setFormStatus("idle");
    if (errors[id]) setErrors((prev) => { const next = { ...prev }; delete next[id]; return next; });
  };

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
      setFormStatus("error");
      return;
    }
    setErrors({});
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact", "cf-turnstile-response": turnstileToken }),
      });
      const result = await res.json();
      if (result.success) {
        setFormStatus("success");
        setFormData(initialFormData);
      } else {
        console.error("Form error:", result.error);
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-brand-black text-brand-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <p className="eyebrow text-brand-white/50 mb-6">Start Here</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] leading-[1.1] mb-6">
            NOT SURE WHAT YOUR ROOF NEEDS?
          </h2>
          <h3 className="font-heading font-bold text-brand-aqua text-xl md:text-2xl mb-12 tracking-wide">
            START WITH AN HONEST INSPECTION.
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 mt-auto pt-12">
            <a
              href="tel:817-266-9433"
              className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
            >
              Call / Text 817-266-9433
            </a>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 bg-brand-charcoal">
          {formStatus === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-brand-aqua flex items-center justify-center text-brand-black mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-xl md:text-2xl text-brand-white mb-3">REQUEST RECEIVED</h3>
              <p className="text-brand-white/60 font-sans text-sm mb-6 max-w-xs">
                Thank you! Our team will contact you within 2 business hours to schedule your inspection.
              </p>
              <button
                type="button"
                onClick={() => setFormStatus("idle")}
                className="text-sm font-heading font-bold text-brand-white underline underline-offset-4 hover:text-brand-aqua transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
          <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-10">
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="relative">
                    <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} className={errors.fname ? `${inputClasses} !border-red-400 focus:!border-red-400` : inputClasses} placeholder="First Name" required />
                    <label htmlFor="fname" className={labelClasses}>First Name</label>
                  </div>
                  {errors.fname && <p className="text-red-400 text-xs mt-1">{errors.fname}</p>}
                </div>
                <div>
                  <div className="relative">
                    <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleInputChange} className={errors.lname ? `${inputClasses} !border-red-400 focus:!border-red-400` : inputClasses} placeholder="Last Name" required />
                    <label htmlFor="lname" className={labelClasses}>Last Name</label>
                  </div>
                  {errors.lname && <p className="text-red-400 text-xs mt-1">{errors.lname}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="relative">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={errors.phone ? `${inputClasses} !border-red-400 focus:!border-red-400` : inputClasses} placeholder="Phone" required />
                    <label htmlFor="phone" className={labelClasses}>Phone</label>
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <div className="relative">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={errors.email ? `${inputClasses} !border-red-400 focus:!border-red-400` : inputClasses} placeholder="Email" required />
                    <label htmlFor="email" className={labelClasses}>Email</label>
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <div className="relative">
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className={errors.address ? `${inputClasses} !border-red-400 focus:!border-red-400` : inputClasses} placeholder="123 Main St, City, TX 76036" required />
                  <label htmlFor="address" className={labelClasses}>Property Address</label>
                </div>
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-brand-charcoal border-b border-white/20 pb-3 text-brand-white/70 focus:outline-none focus:border-brand-aqua transition-colors font-sans text-lg appearance-none rounded-none cursor-pointer"
                >
                  <option value="" disabled>Select Service Needed</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-aqua">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg resize-none"
                  placeholder="Message"
                />
                <label htmlFor="message" className={labelClasses}>Message (Optional)</label>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="sms"
                  name="sms"
                  checked={formData.sms}
                  onChange={handleInputChange}
                  className="mt-1 accent-brand-aqua cursor-pointer w-4 h-4 rounded-none bg-brand-charcoal border-white/20"
                />
                <label htmlFor="sms" className="text-xs text-brand-white/50 font-sans leading-tight cursor-pointer">
                  I consent to receive SMS notifications, alerts &amp; occasional marketing communication from 41
                  Roofing &amp; Restoration. View Privacy Policy and Terms of Service.
                </label>
              </div>
              <Turnstile onToken={handleToken} />
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full border border-brand-white text-brand-white py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors mt-4 disabled:opacity-50"
              >
                {formStatus === "submitting" ? "Submitting..." : "Request My Inspection"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
