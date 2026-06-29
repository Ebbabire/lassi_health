import dashImage from "@/assets/dash.png";

export const ProductShowcase = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-900/30">
      <img
        src={dashImage}
        alt="Lassi clinical continuity dashboard showing active cases and the longitudinal clinical thread"
        className="w-full h-auto"
      />
    </div>
  );
};
