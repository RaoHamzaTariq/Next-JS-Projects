// components/SanityVideo.tsx
import { FC } from "react";
import { getSanityVideoUrl, SanityFileAsset } from "@/sanity/lib/client"

interface SanityVideoProps {
  videoAsset: SanityFileAsset;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const SanityVideo: FC<SanityVideoProps> = ({
  videoAsset,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
}) => {
  const videoUrl = getSanityVideoUrl(videoAsset);
  
  if (!videoUrl) {
    return null;
  }
  
  return (
    <video
      src={videoUrl}
      width={600}
      height={400}
      className="rounded-lg shadow-md"
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default SanityVideo;    