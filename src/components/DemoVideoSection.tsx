import { VideoShowcase } from "./VideoShowcase";

export const DemoVideoSection = () => {
  return (
    <section className="px-4 pb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
          Watch Lassi in Action
        </h2>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
          See how Lassi fits into a real clinical day — from orientation to
          continuity across patients and visits.
        </p>
        <VideoShowcase
          autoPlay={false}
          loop={false}
          muted={false}
          controls
          preload="metadata"
        />
      </div>
    </section>
  );
};
