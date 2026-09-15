"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { useModal } from "@/components/ModalProvider";

interface FormData {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id.replace("modal-", "")]: e.target.value }));
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
          <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-black mb-2">
            BOOK YOUR FREE INSPECTION
          </h3>
          <p className="text-brand-muted font-sans text-sm mb-8">
            Fill out the form below and we&rsquo;ll contact you to schedule your inspection.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <h4 className="font-heading font-black text-2xl text-brand-black mb-3">THANK YOU!</h4>
              <p className="text-brand-muted font-sans text-sm mb-6">
                We&rsquo;ll contact you shortly to schedule your free inspection.
              </p>
              <button
                type="button"
                onClick={() => { setStatus("idle"); setFormData(initialFormData); }}
                className="border border-brand-black text-brand-black px-6 py-3 rounded-[10px] font-heading font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" id="modal-fname" value={formData.fname} onChange={handleChange} className={inputClasses} placeholder="First Name *" required />
                <input type="text" id="modal-lname" value={formData.lname} onChange={handleChange} className={inputClasses} placeholder="Last Name *" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" id="modal-phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="Phone *" required />
                <input type="email" id="modal-email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="Email *" required />
              </div>
              <input type="text" id="modal-address" value={formData.address} onChange={handleChange} className={inputClasses} placeholder="Property Address / ZIP *" required />
              <div className="relative">
                <select
                  id="modal-service"
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
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Message (Optional)"
              />
              {status === "error" && (
                <p className="text-red-500 text-xs font-sans">Please fill in all required fields.</p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-brand-black text-brand-white py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Request My Inspection"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
