import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import dashImage from "@/assets/dash.png";

const avmaSchema = z.object({
  email: z
    .string()
    .email({ message: "A valid professional email is required" }),
});

type AvmaFormData = z.infer<typeof avmaSchema>;

export const AvmaPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors },
  } = useForm<AvmaFormData>({
    resolver: zodResolver(avmaSchema),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      console.error("Form reference is null");
      setIsSubmitting(false);
      toast.error("Submission Failed", {
        description: "An unexpected error occurred. Please try again.",
      });
      return;
    }

    try {
      // Reusing the same emailjs configuration as IntakeForm
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      console.log("Email sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission Failed", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh bg-[#0D0F12] text-slate-200 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-md space-y-6 pb-8">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center text-white">
          Walk in ready.
        </h1>

        {/* Dashboard Screenshot */}
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20">
          <img
            src={dashImage}
            alt="Lassi clinical continuity dashboard showing active cases and the longitudinal clinical thread"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Short Explanation */}
        <p className="text-center text-slate-400 text-sm sm:text-base">
          Your practice shouldn't start every morning with chart reconstruction.
          Lassi keeps the clinical thread organized so you already know what
          changed, what still matters, and what needs attention before you walk
          into the room.
        </p>

        {/* Product Pillars */}
        <ul className="space-y-2 text-slate-300 px-2 text-sm sm:text-base">
          <li className="flex gap-3 items-start">
            <span className="text-indigo-500 font-bold mt-0.5">✓</span>
            <span>Active clinical states</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-indigo-500 font-bold mt-0.5">✓</span>
            <span>Unresolved obligations</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-indigo-500 font-bold mt-0.5">✓</span>
            <span>Pending diagnostic follow-up</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-indigo-500 font-bold mt-0.5">✓</span>
            <span>Returning patient continuity</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-indigo-500 font-bold mt-0.5">✓</span>
            <span>Longitudinal clinical thread</span>
          </li>
        </ul>

        {/* Form + CTA */}
        {submitted ? (
          <div className="bg-brand-card border border-slate-800 rounded-xl p-8 shadow-2xl text-center animate-in fade-in zoom-in duration-500">
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
              We'll be in touch soon with your early access invitation.
            </p>
          </div>
        ) : (
          <form
            name="avma-intake"
            ref={form}
            onSubmit={onSubmit}
            className="space-y-4 pt-2"
          >
            <div>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="Professional Email"
                className={`w-full px-4 py-3.5 bg-[#1A1D24] border rounded-lg focus:outline-none focus:ring-2 transition-all text-white placeholder:text-slate-500 ${
                  errors.email
                    ? "border-rose-500/50 focus:ring-rose-500/20 focus:border-rose-500"
                    : "border-slate-700 focus:ring-indigo-500/40 focus:border-indigo-500"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] font-medium text-rose-400 pl-1 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-lg transition-all transform active:scale-[0.98] focus:ring-4 focus:ring-indigo-500/30 flex items-center justify-center gap-2 text-lg"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-slate-400"
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
                "Request a Demo"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
