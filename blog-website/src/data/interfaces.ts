import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface BlogCardProps {
  slug: string;
  mainImage: SanityImageSource;
  title: React.ReactNode;
  shortDesc: React.ReactNode;
  author: {
    image: SanityImageSource;
    name: React.ReactNode;
  };
  publishedAt: React.ReactNode;
}

export interface BlogPostCard {
  title: string;
  slug: { current: string };
  publishedAt: string;
  shortDesc: string;
  author: { name: string; image: SanityImageSource };
  mainImage: SanityImageSource;
}

export interface Comment {
  _rev: string;                 
  email: string;            
  post: {
    _ref: string;         
    _type: string;         
  };   
  _createdAt: string;        
  _type: string;    
  name: string;             
  comment: string;   
  _id: string;                 
  _updatedAt: string;       
}
