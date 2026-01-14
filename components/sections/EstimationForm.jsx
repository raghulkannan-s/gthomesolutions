"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function EstimationForm({ embedded = false, anchorId = "estimation" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const isLoading = status === "loading";

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.replace(/\s+/g, "").trim();
    const location = formData.location.trim();
    const message = formData.message.trim();

    if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (location.length < 3) {
      newErrors.location = "Please enter your location";
    }

    if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot trap
    if (formData.honeypot) return;

    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.replace(/\s+/g, "").trim(),
      location: formData.location.trim(),
      message: formData.message.trim(),
      honeypot: formData.honeypot,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          location: "",
          message: "",
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to submit. Please try again or call us directly.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const content = (
    <div className={embedded ? "w-full" : "max-w-xl mx-auto"}>
      {status === "success" ? (
        <div
          className={`${
            embedded ? "bg-white/95" : "bg-green-50"
          } border ${
            embedded ? "border-white/20" : "border-green-200"
          } rounded-xl p-6 text-center`}
        >
          <span className="text-4xl mb-3 block">✅</span>

          <h3
            className={`text-lg font-semibold ${
              embedded ? "text-[#1e3a5f]" : "text-green-800"
            } mb-2`}
          >
            Request Submitted Successfully!
          </h3>

          <p className={embedded ? "text-gray-700 text-sm" : "text-green-700 text-sm"}>
            Thank you. We&apos;ll contact you soon.
          </p>

          <Button
            onClick={() => setStatus("idle")}
            variant="primary"
            className="mt-5"
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`${
            embedded
              ? "bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-white/20"
              : "bg-gray-50 border border-gray-200"
          } p-5 sm:p-6 rounded-xl space-y-4`}
        >
          {/* Honeypot (offscreen field) */}
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Form Title (only when embedded) */}
          {embedded && (
            <div className="mb-1">
              <h3 className="text-base font-semibold text-gray-900">
                Get Free Estimation
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Fill the details. We&apos;ll call you back.
              </p>
            </div>
          )}

          {/* Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                autoComplete="name"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                placeholder="Your name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contact Number *
              </label>
              <input
                type="tel"
                inputMode="numeric"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                autoComplete="tel"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                placeholder="10-digit mobile number"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Location (full width) */}
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={isLoading}
                autoComplete="address-level2"
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition ${
                  errors.location ? "border-red-500" : "border-gray-300"
                } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                placeholder="Your location in Chennai"
                required
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            {/* Message (full width) */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                placeholder="Example: 2BHK interior painting, terrace waterproofing..."
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          {/* Submit button RIGHT aligned */}
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              className="px-6 py-3 text-base flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );

  if (embedded) {
    return (
      <div id={anchorId} className="w-full">
        {content}
      </div>
    );
  }

  return (
    <section id={anchorId} className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
