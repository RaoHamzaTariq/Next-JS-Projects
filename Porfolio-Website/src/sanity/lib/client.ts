import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Define TypeScript interface for Sanity image assets
export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// Set up image URL builder
const builder = imageUrlBuilder(client);

// Function to get image URL from Sanity image reference
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityFileAsset {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// Function to get video URL from Sanity file reference
export function getSanityVideoUrl(fileAsset: SanityFileAsset): string {
  if (!fileAsset?.asset?._ref) {
    return "";
  }
  
  // Parse the file reference
  const [_file, id, extension] = fileAsset.asset._ref.split('-');
  
  // Construct the CDN URL
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}/${id}.${extension}`;
}