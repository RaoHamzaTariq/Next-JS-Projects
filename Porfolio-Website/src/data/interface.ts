import { SanityFileAsset, SanityImageAsset } from "@/sanity/lib/client";
import { PortableTextBlock } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface PortfolioData {
  _id: string;
  _type: 'portfolio';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  tags: string[];
  shortDesc: string;
  content: PortableTextBlock[];
  skills: string[];
  slug: {
    current: string;
    _type: 'slug';
  };
  livedemo?: string;
  demo_video?:SanityFileAsset;
  githubUrl?: string;
  category: string;
  mainImage: SanityImageAsset;
  moreImages?: SanityImageSource[];
  video_url?: string;
}