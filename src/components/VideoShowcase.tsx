import demoVideo from "@/assets/lassiDemoVideo.mp4";
import posterImage from "@/assets/poster.png";

export const VideoShowcase = () => {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-indigo-700/40 shadow-2xl shadow-indigo-500/20">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        className="w-full h-full object-cover"
      >
        <source src={demoVideo} type="video/mp4" />
      </video>
    </div>
  );
};
