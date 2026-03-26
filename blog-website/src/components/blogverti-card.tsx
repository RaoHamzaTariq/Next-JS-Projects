"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CalendarBlank, UserCircle } from "@phosphor-icons/react";
import { urlFor } from "@/sanity/lib/image";
import { BlogCardProps } from "@/data/interfaces";

const BlogVertiCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  const imageSrc = props.mainImage ? urlFor(props.mainImage).url() : "/default-image.png";
  const authorImage = props.author?.image ? urlFor(props.author.image).url() : "/default-image.png";

  return (
    <Link href={`/blogs/${props.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/15">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc}
            alt={`Featured post: ${props.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5 p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span>Article</span>
            <span className="h-px w-6 bg-border" />
            <span className="truncate">{props.publishedAt as string}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {props.title}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {props.shortDesc}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-secondary">
                <Image src={authorImage} alt={`Author: ${props.author?.name}`} fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{props.author?.name}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <UserCircle className="h-3 w-3" weight="duotone" />
                    Byline
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarBlank className="h-3 w-3" weight="duotone" />
                    {props.publishedAt as string}
                  </span>
                </div>
              </div>
            </div>
            <span className="rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground transition group-hover:border-custom group-hover:text-custom">
              Read
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogVertiCard;
