// components/SanityImage.tsx
import { FC } from "react";
import Image from "next/image";
import { urlFor, SanityImageAsset } from "@/sanity/lib/client";

interface SanityImageProps {
  imageAsset: SanityImageAsset;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  imgClassName? : string,
  sizes?: string;
}

const SanityImage: FC<SanityImageProps> = ({
  imageAsset,
  alt,
  width,
  height,
  priority = false,
  imgClassName = "",
  sizes,
}) => {
  if (!imageAsset?.asset?._ref) {
    return null;
  }
  
  // Generate the image URL from Sanity
  const imageUrl = urlFor(imageAsset).url();
  
  return (
    
     <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`${imgClassName}`}
      />
  
  );
};

export default SanityImage;