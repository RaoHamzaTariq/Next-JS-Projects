import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BlogPost } from "@/app/api/fetchingblog/route";

const BlogVertiCard = (props: any) => {
  return (
    <Link href={`/blogs/${props.slug}`}>
    <article className="dark:bg-gray-800  rounded-lg overflow-hidden">
      
        <Image
          src={
            props.mainImage
              ? urlFor(props.mainImage).url()
              : "/default-image.png"
          }
          alt={`Featured post: ${props.title}`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
        {props.title}
        </h3>
        <p className=" mb-4">{props.shortDesc}</p>
        <div className="flex items-center">
          <Image
            src={
                                  props.author?.image
                                    ? urlFor(props.author?.image).url()
                                    : "/default-image.png"
                                }
            alt={`Author: ${props.author?.name}`}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium">{props.author?.name}</p>
            <p className="text-xs">{props.publishedAt}</p>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default BlogVertiCard;
