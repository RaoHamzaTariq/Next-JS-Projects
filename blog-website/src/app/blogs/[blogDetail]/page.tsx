import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Copy, Linkedin, Twitter } from "lucide-react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { BlogPost } from "@/app/api/fetchingblog/route";
import { urlFor } from "@/sanity/lib/image";
import CommentForm from "@/components/commentsSection";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-8 text-muted-foreground">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 text-xl font-medium tracking-tight text-foreground">
        {children}
      </h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

const formatDate = (value?: string) => {
  if (!value) return "Recent";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

async function fetchPost(slug: string): Promise<BlogPost | null> {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/fetchingblog`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.data)) {
      throw new Error("Invalid data format");
    }

    return data.data.find(
      (post: BlogPost) => post.slug?.current === slug
    ) ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BlogDetail({
  params,
}: {
  params: { blogDetail: string };
}) {
  const post = await fetchPost(params.blogDetail);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.mainImage ? urlFor(post.mainImage).url() : "/default-image.png"}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.34em] text-muted-foreground">
                <span>Article detail</span>
                <span className="h-px w-6 bg-border" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-secondary">
                    <Image
                      src={post.author?.image ? urlFor(post.author.image).url() : "/default-image.png"}
                      alt={post.author?.name ?? "Author"}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {post.author?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Published {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition hover:-translate-y-px hover:border-custom hover:text-custom"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition hover:-translate-y-px hover:border-custom hover:text-custom"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition hover:-translate-y-px hover:border-custom hover:text-custom"
                    aria-label="Copy link"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="max-w-none">
              {post.body && (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              )}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                  Discussion
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Continue the conversation below.
                </h2>
              </div>
            </div>
            <div className="mt-6">
              <CommentForm postId={post._id} />
            </div>
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[2.25rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              At a glance
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>Author: {post.author?.name}</p>
              <p>Published: {formatDate(post.publishedAt)}</p>
              <p>Format: Longform editorial</p>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-border bg-secondary/60 p-6">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Summary
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              {post.shortDesc}
            </p>
          </div>

          <div className="rounded-[2.25rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Next step
            </p>
            <Link
              href="/blogs"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-custom transition hover:translate-x-0.5"
            >
              Back to archive
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
}
