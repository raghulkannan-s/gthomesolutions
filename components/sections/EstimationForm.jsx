"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function EstimationForm({
  embedded = false,
  anchorId = "estimation",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isLoading = status === "loading";

  /* --------------------------- Validation --------------------------- */

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.replace(/\D/g, "").slice(-10);
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

  /* --------------------------- Change Handler --------------------------- */

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* --------------------------- Submit Handler --------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot trap
    if (formData.honeypot) return;

    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.replace(/\D/g, "").slice(-10),
      location: formData.location.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server error. Try again.");
      }

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid server response.");
      }

      if (!result.success) {
        throw new Error(result.error || "Submission failed.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        location: "",
        message: "",
        honeypot: "",
      });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Submission failed.");
    }
  };

  /* --------------------------- UI --------------------------- */

  const formUI = (
    <div className={embedded ? "w-full" : "max-w-xl mx-auto"}>
      {status === "success" ? (
        <div
          className={`${
            embedded ? "bg-white/95" : "bg-green-50"
          } border ${
            embedded ? "border-white/20" : "border-green-200"
          } rounded-xl p-6 text-center`}
        >
          <div className="text-4xl mb-3">✅</div>

          <h3
            className={`text-lg font-semibold ${
              embedded ? "text-[#1e3a5f]" : "text-green-800"
            } mb-2`}
          >
            Request Submitted Successfully!
          </h3>

          <p
            className={
              embedded ? "text-gray-700 text-sm" : "text-green-700 text-sm"
            }
          >
            We will contact you shortly.
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
              ? "bg-white/90 backdrop-blur-md shadow-xl ring-1 ring-white/20"
              : "bg-gray-50 border border-gray-200"
          } p-6 rounded-xl space-y-4`}
        >
          {/* Honeypot */}
          <div className="absolute -left-2499.75px top-auto w-0 h-0 overflow-hidden">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {embedded && (
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Get Free Estimation
              </h3>
              <p className="text-xs text-gray-600">
                Fill the details. We will call you back.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Your name *"
                className={`w-full px-4 py-2.5 border rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                inputMode="numeric"
                placeholder="Mobile number *"
                className={`w-full px-4 py-2.5 border rounded-lg ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Location */}
            <div className="sm:col-span-2">
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Location in Chennai *"
                className={`w-full px-4 py-2.5 border rounded-lg ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Project details *"
                className={`w-full px-4 py-2.5 border rounded-lg resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {errorMessage}
            </div>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className="px-6 py-3"
            >
              {isLoading ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );

  if (embedded) {
    return <div className="w-full">{formUI}</div>;
  }

  return (
    <section
      id={anchorId}
      className="py-16 md:py-24 bg-white scroll-mt-24"
      style={{ scrollMarginTop: 96 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {formUI}
      </div>
    </section>
  );
}
