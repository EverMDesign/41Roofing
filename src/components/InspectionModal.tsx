"use client";

import { useState, useEffect, useCallback, useRef, type ChangeEvent } from "react";
import { validateName, validatePhone, validateEmail, validateAddress } from "@/lib/validation";
import { useModal } from "@/components/ModalProvider";
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
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

const inputClasses =
  "w-full bg-brand-softGray border border-brand-border rounded-[10px] px-4 py-3 text-brand-charcoal placeholder-brand-muted focus:outline-none focus:border-brand-aqua transition-colors font-sans text-sm";

export default function InspectionModal() {
  const { isOpen, close } = useModal();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const handleToken = useCallback((token: string) => setTurnstileToken(token), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = e.target.id.replace("modal-", "");
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (status === "error") setStatus("idle");
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const handleClick = async () => {
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
    formRef.current?.requestSubmit();
    setStatus("submitting");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "inspection-modal", "cf-turnstile-response": turnstileToken }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData(initialFormData);
          close();
        }, 5000);
      } else {
        console.error("Form error:", result.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    close();
    if (status === "success") {
      setStatus("idle");
      setFormData(initialFormData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-brand-white rounded-[10px] shadow-2xl animate-[modalIn_300ms_ease-out]">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-black transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-brand-aqua flex items-center justify-center text-brand-black mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-3">REQUEST RECEIVED</h3>
              <p className="text-brand-muted font-sans text-sm mb-6 max-w-xs">
                Thank you! Our team will contact you within 2 business hours to schedule your inspection.
              </p>
              <button
                type="button"
                onClick={() => { setStatus("idle"); close(); }}
                className="bg-brand-black text-brand-white px-8 py-3 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
          <>
          <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-black mb-2">
            BOOK YOUR FREE INSPECTION
          </h3>
          <p className="text-brand-muted font-sans text-sm mb-8">
            Fill out the form below and we&rsquo;ll contact you to schedule your inspection.
          </p>

          <form ref={formRef} id="inspection-modal-form" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="text" id="modal-fname" name="fname" value={formData.fname} onChange={handleChange} className={errors.fname ? `${inputClasses} !border-red-400 focus:!border-red-500` : inputClasses} placeholder="First Name *" required />
                  {errors.fname && <p className="text-red-500 text-xs mt-1">{errors.fname}</p>}
                </div>
                <div>
                  <input type="text" id="modal-lname" name="lname" value={formData.lname} onChange={handleChange} className={errors.lname ? `${inputClasses} !border-red-400 focus:!border-red-500` : inputClasses} placeholder="Last Name *" required />
                  {errors.lname && <p className="text-red-500 text-xs mt-1">{errors.lname}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? `${inputClasses} !border-red-400 focus:!border-red-500` : inputClasses} placeholder="Phone *" required />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? `${inputClasses} !border-red-400 focus:!border-red-500` : inputClasses} placeholder="Email *" required />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input type="text" id="modal-address" name="address" value={formData.address} onChange={handleChange} className={errors.address ? `${inputClasses} !border-red-400 focus:!border-red-500` : inputClasses} placeholder="123 Main St, City, TX 76036 *" required />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="relative">
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Service Needed</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-muted">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Message (Optional)"
              />
              <div className="flex items-start gap-3 mt-1">
                <input
                  type="checkbox"
                  id="modal-sms"
                  name="sms"
                  checked={formData.sms}
                  onChange={(e) => setFormData((prev) => ({ ...prev, sms: e.target.checked }))}
                  className="mt-1 accent-brand-aqua cursor-pointer w-4 h-4"
                />
                <label htmlFor="modal-sms" className="text-[10px] text-brand-muted font-sans leading-tight cursor-pointer">
                  I consent to receive SMS notifications, alerts &amp; occasional marketing communication from 41
                  Roofing &amp; Restoration. View Privacy Policy and Terms of Service.
                </label>
              </div>
              <Turnstile onToken={handleToken} />
              <button
                type="button"
                onClick={handleClick}
                disabled={status === "submitting"}
                className="w-full bg-brand-black text-brand-white py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Request My Inspection"}
              </button>
            </form>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
