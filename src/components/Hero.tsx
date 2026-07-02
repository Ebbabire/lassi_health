
export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-4 pb-8 px-4 text-center max-w-3xl mx-auto">
      <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-600/40">
        <span className="text-indigo-300 font-medium text-[10px] uppercase tracking-widest">
          Pilot Phase in Progress
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-5">
        Walk in ready<span className="text-indigo-500">.</span>
      </h1>
      
      <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
        Whether you're opening the exam room door, reviewing new results, taking a referral, or calling an owner, you'll already know where the case stands.
      </p>
      <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mt-4">
        Lassi continuously maintains the current state of management so every clinical interaction begins with orientation rather than reconstruction.
      </p>
    </section>
  );
};
