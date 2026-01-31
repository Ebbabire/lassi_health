import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import emailjs from "@emailjs/browser";

const intakeSchema = z.object({
  name: z.string().min(2, { message: "Clinician name is required" }),
  practice: z
    .string()
    .min(3, { message: "Practice or institution name is required" }),
  email: z
    .string()
    .email({ message: "A valid professional email is required" }),
  "bot-field": z.string().optional(),
  time: z.string().optional(),
});

type IntakeFormData = z.infer<typeof intakeSchema>;

export const IntakeForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [time, setTime] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors },
  } = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Set the timestamp when form is submitted
    const timestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
    setTime(timestamp);

    if (!form.current) {
      console.error("Form reference is null");
      setIsSubmitting(false);
      setSubmitError(true);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      console.log("Email sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-brand-card border border-slate-800 rounded-xl p-12 shadow-2xl shadow-indigo-900/10 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-serif font-bold text-white mb-2">
          Request Received
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Our clinical team will review your application and contact you if a
          pilot slot becomes available in your region.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-brand-card border border-slate-800 rounded-xl p-8 shadow-2xl shadow-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600/50" />
      <h2 className="text-xl font-serif font-bold text-white mb-6 text-center">
        Request Access
      </h2>

      <form
        name="pilot-intake"
        ref={form}
        data-netlify="true"
        onSubmit={onSubmit}
        className="space-y-5"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human:{" "}
            <input {...register("bot-field")} />
          </label>
        </p>
        <input
          type="hidden"
          {...register("time")}
          name="time"
          value={time}
        />

        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-400"
          >
            Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Dr. Jane Smith"
            className={`w-full px-4 py-2.5 bg-brand-dark border rounded-lg focus:outline-none focus:ring-2 transition-all text-white placeholder:text-slate-700 ${
              errors.name
                ? "border-rose-500/50 focus:ring-rose-500/20 focus:border-rose-500"
                : "border-slate-700 focus:ring-indigo-500/40 focus:border-indigo-500"
            }`}
          />
          {errors.name && (
            <p className="text-[11px] font-medium text-rose-400 pl-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="practice"
            className="block text-sm font-medium text-slate-400"
          >
            Practice / Institution
          </label>
          <input
            {...register("practice")}
            type="text"
            id="practice"
            name="practice"
            placeholder="Green Valley Veterinary Hospital"
            className={`w-full px-4 py-2.5 bg-brand-dark border rounded-lg focus:outline-none focus:ring-2 transition-all text-white placeholder:text-slate-700 ${
              errors.practice
                ? "border-rose-500/50 focus:ring-rose-500/20 focus:border-rose-500"
                : "border-slate-700 focus:ring-indigo-500/40 focus:border-indigo-500"
            }`}
          />
          {errors.practice && (
            <p className="text-[11px] font-medium text-rose-400 pl-1">
              {errors.practice.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-400"
          >
            Professional Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="jane.smith@example.com"
            className={`w-full px-4 py-2.5 bg-brand-dark border rounded-lg focus:outline-none focus:ring-2 transition-all text-white placeholder:text-slate-700 ${
              errors.email
                ? "border-rose-500/50 focus:ring-rose-500/20 focus:border-rose-500"
                : "border-slate-700 focus:ring-indigo-500/40 focus:border-indigo-500"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] font-medium text-rose-400 pl-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all transform active:scale-[0.98] focus:ring-4 focus:ring-indigo-500/30 flex items-center justify-center gap-2 mt-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </button>

        {submitError && (
          <div className="bg-rose-500/10 border border-rose-500/50 rounded-lg p-4 flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-rose-500 shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-rose-400 mb-1">
                Submission Failed
              </h3>
              <p className="text-xs text-rose-300/80 leading-relaxed">
                We couldn't process your request at this time. Please check your
                internet connection and try again. If the problem persists,
                contact us directly.
              </p>
            </div>
          </div>
        )}

        <p className="text-[11px] text-slate-400 text-center leading-relaxed px-4 pt-2">
          By submitting, you agree to our confidential pilot terms. Lassi Health
          is a decision support tool, not a diagnostic provider.
        </p>
      </form>
    </div>
  );
};
