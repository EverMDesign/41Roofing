"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { id, value } = target;
    const isCheckbox = target instanceof HTMLInputElement && target.type === "checkbox";
    setFormData((prev) => ({
      ...prev,
      [id]: isCheckbox ? (target as HTMLInputElement).checked : value,
    }));
    if (formStatus === "error") setFormStatus("idle");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fname || !formData.lname || !formData.phone || !formData.email || !formData.address) {
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
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
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h3 className="font-heading font-black text-3xl text-brand-white mb-4">THANK YOU!</h3>
              <p className="text-brand-white/80 font-sans text-lg">
                We have received your request and will contact you shortly to schedule your inspection.
              </p>
              <button
                onClick={() => {
                  setFormStatus("idle");
                  setFormData(initialFormData);
                }}
                className="mt-8 inline-flex justify-center items-center border border-brand-white text-brand-white px-8 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" id="fname" value={formData.fname} onChange={handleInputChange} className={inputClasses} placeholder="First Name" required />
                  <label htmlFor="fname" className={labelClasses}>First Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" value={formData.lname} onChange={handleInputChange} className={inputClasses} placeholder="Last Name" required />
                  <label htmlFor="lname" className={labelClasses}>Last Name</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses} placeholder="Phone" required />
                  <label htmlFor="phone" className={labelClasses}>Phone</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={inputClasses} placeholder="Email" required />
                  <label htmlFor="email" className={labelClasses}>Email</label>
                </div>
              </div>
              <div className="relative">
                <input type="text" id="address" value={formData.address} onChange={handleInputChange} className={inputClasses} placeholder="Property Address / ZIP" required />
                <label htmlFor="address" className={labelClasses}>Property Address / ZIP</label>
              </div>
              <div className="relative">
                <select
                  id="service"
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
                  checked={formData.sms}
                  onChange={handleInputChange}
                  className="mt-1 accent-brand-aqua cursor-pointer w-4 h-4 rounded-none bg-brand-charcoal border-white/20"
                />
                <label htmlFor="sms" className="text-xs text-brand-white/50 font-sans leading-tight">
                  I consent to receive SMS notifications, alerts &amp; occasional marketing communication from 41
                  Roofing &amp; Restoration. View Privacy Policy and Terms of Service.
                </label>
              </div>
              {formStatus === "error" && (
                <p className="text-red-400 text-sm font-sans">Please fill in all required fields.</p>
              )}
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
