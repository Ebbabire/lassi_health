import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <div className="size-[18px] rounded-full bg-[#f43f5e] text-[#2a1115] flex items-center justify-center shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </div>
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-brand-card group-[.toaster]:text-slate-200 group-[.toaster]:border-slate-800 group-[.toaster]:shadow-2xl shadow-indigo-900/10 group-[.toaster]:rounded-xl font-sans",
          description: "text-xs text-slate-400 leading-relaxed",
          title: "text-sm font-serif font-bold text-white mb-1",
          actionButton:
            "group-[.toast]:bg-indigo-600 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-slate-800 group-[.toast]:text-slate-400",
          error:
            "group-[.toaster]:!bg-[#2a1115] group-[.toaster]:!border-[#4c1d2b] group-[.toaster]:!text-[#f43f5e] group-[.toaster]:[&_[data-title]]:!text-[#fb7185] group-[.toaster]:[&_[data-description]]:!text-[#fecdd3]/80",
          success:
            "group-[.toaster]:bg-emerald-500/10 group-[.toaster]:border-emerald-500/50 group-[.toaster]:text-emerald-500 group-[.toaster]:[&_[data-title]]:text-emerald-400 group-[.toaster]:[&_[data-description]]:text-emerald-300/80",
          warning:
            "group-[.toaster]:bg-amber-500/10 group-[.toaster]:border-amber-500/50 group-[.toaster]:text-amber-500 group-[.toaster]:[&_[data-title]]:text-amber-400 group-[.toaster]:[&_[data-description]]:text-amber-300/80",
          info:
            "group-[.toaster]:bg-indigo-500/10 group-[.toaster]:border-indigo-500/50 group-[.toaster]:text-indigo-500 group-[.toaster]:[&_[data-title]]:text-indigo-400 group-[.toaster]:[&_[data-description]]:text-indigo-300/80",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
