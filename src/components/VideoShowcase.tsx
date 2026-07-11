import demoVideo from "@/assets/lassiDemoVideo.mp4";
import posterImage from "@/assets/poster.png";

interface VideoShowcaseProps {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";
}

export const VideoShowcase = ({
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  preload = "auto",
}: VideoShowcaseProps) => {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-indigo-700/40 shadow-2xl shadow-indigo-500/20">
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
        preload={preload}
        poster={posterImage}
        className="w-full h-full object-cover"
      >
        <source src={demoVideo} type="video/mp4" />
      </video>
    </div>
  );
};
