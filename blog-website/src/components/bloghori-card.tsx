import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight, BookmarkSimple, ShareNetwork } from "@phosphor-icons/react";
import { urlFor } from "@/sanity/lib/image";
import { BlogCardProps } from "@/data/interfaces";

const BlogHoriCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  const imageSrc = props.mainImage ? urlFor(props.mainImage).url() : "/default-image.png";
  const authorImage = props.author?.image ? urlFor(props.author.image).url() : "/default-image.png";

  return (
    <Link href={`/blogs/${props.slug}`} className="group block">
      <article className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/15 lg:grid-cols-[280px_1fr]">
        <div className="relative min-h-[220px]">
          <Image
            src={imageSrc}
            alt={String(props.title)}
            fill
            sizes="(max-width: 1024px) 100vw, 280px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col gap-5 p-6 lg:p-7">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <span>Latest note</span>
            <span className="h-px w-6 bg-border" />
            <span>{props.publishedAt as string}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {props.title}
            </h3>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              {props.shortDesc}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-secondary">
                <Image src={authorImage} alt={`Author: ${props.author?.name}`} fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{props.author?.name}</p>
                <p className="text-xs text-muted-foreground">Published article</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border p-2 text-foreground transition group-hover:border-custom group-hover:text-custom">
                <BookmarkSimple className="h-4 w-4" weight="duotone" />
              </span>
              <span className="rounded-full border border-border p-2 text-foreground transition group-hover:border-custom group-hover:text-custom">
                <ShareNetwork className="h-4 w-4" weight="duotone" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition group-hover:bg-custom group-hover:text-custom-foreground">
                Read
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogHoriCard;
