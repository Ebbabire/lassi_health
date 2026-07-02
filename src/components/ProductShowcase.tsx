import dashImage from "@/assets/dash.png";

export const ProductShowcase = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-indigo-700/40 shadow-2xl shadow-indigo-500/20 ring-1 ring-inset ring-white/5 bg-[#1A1D24]">
      {/* App Window Chrome */}
      <div className="h-10 w-full bg-[#13151A] border-b border-indigo-700/30 flex items-center px-4 relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/60 via-indigo-400/40 to-transparent" />
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
        </div>
      </div>
      
      {/* Product Image */}
      <img
        src={dashImage}
        alt="Lassi clinical continuity dashboard showing active cases and the longitudinal clinical thread"
        className="w-full h-auto"
      />
    </div>
  );
};
