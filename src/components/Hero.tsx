
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-8 pb-10 px-4 text-center max-w-3xl mx-auto">
      <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
        <span className="text-slate-400 font-medium text-[10px] uppercase tracking-widest">
          Pilot Phase in Progress
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-5">
        Clinical Intelligence & Decision Support
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
        Operating in closed beta with select partner clinics to assist veterinarians in complex case reasoning and evidence-based decision making.
      </p>
    </section>
  );
};
