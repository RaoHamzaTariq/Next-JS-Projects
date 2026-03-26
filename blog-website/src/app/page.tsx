import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarBlank, ChartLine, CheckCircle, Newspaper, Sparkle } from "@phosphor-icons/react";
import { BlogPostCard } from "@/data/interfaces";
import { urlFor } from "@/sanity/lib/image";

const editorialNotes = [
  "Clean story hierarchy",
  "Muted sage accent",
  "No neon gradients",
  "Soft paper surfaces",
];

const topicPills = [
  "Design systems",
  "Frontend architecture",
  "Content strategy",
  "Workflow tooling",
  "Product notes",
  "Editorial layouts",
];

const formatDate = (value?: string) => {
  if (!value) return "Recent";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const safeImage = (image?: BlogPostCard["mainImage"]) =>
  image ? urlFor(image).url() : "/default-image.png";

async function fetchPosts(): Promise<BlogPostCard[]> {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/fetchingblog`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.data)) {
      throw new Error("Invalid blog data");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const posts = await fetchPosts();
  const featured = posts[0];
  const secondary = posts.slice(1, 5);
  const latest = posts.slice(0, 6);

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(107,127,112,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.035),_transparent_28%)]" />

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.34em] text-muted-foreground">
              <span>BI Structure</span>
              <span className="h-px w-8 bg-border" />
              <span>Editorial blog</span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A sharper home for stories about product, code, and design.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                The site now reads like an editorial system: calmer surfaces,
                stronger hierarchy, and one muted accent that keeps the whole
                experience grounded.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-custom px-6 py-3 text-sm font-medium text-custom-foreground shadow-sm transition hover:-translate-y-px hover:bg-custom/90"
              >
                Browse stories
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-px hover:bg-secondary"
              >
                Contact the team
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {editorialNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <CheckCircle className="h-4 w-4 text-custom" weight="duotone" />
                  <span className="text-sm text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Stories", value: posts.length.toString().padStart(2, "0") },
                { label: "Topics", value: "06" },
                { label: "Focus", value: "90%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-border bg-card p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_60px_-28px_rgba(15,23,42,0.25)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={safeImage(featured?.mainImage)}
                  alt={featured?.title ?? "Featured story"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  <span>Featured story</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{formatDate(featured?.publishedAt)}</span>
                </div>
                <h2 className="text-2xl font-semibold leading-tight text-foreground">
                  {featured?.title ?? "A featured story will appear here."}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  {featured?.shortDesc ??
                    "Once stories are available, this space becomes the front page feature with image-led context and a sharper summary."}
                </p>
                <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-sm font-medium text-foreground">
                      {featured?.author?.name?.slice(0, 1) ?? "B"}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {featured?.author?.name ?? "BI Structure"}
                      </p>
                      <p className="text-xs text-muted-foreground">Lead editor</p>
                    </div>
                  </div>
                  {featured?.slug?.current ? (
                    <Link
                      href={`/blogs/${featured.slug.current}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-custom transition hover:translate-x-0.5"
                    >
                      Open article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Read time", value: "06 min", icon: BookOpen },
                { label: "Freshness", value: "Daily", icon: CalendarBlank },
                { label: "Format", value: "Longform", icon: Newspaper },
                { label: "Signal", value: "Curated", icon: Sparkle },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-border bg-card p-5 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-custom" />
                    <p className="mt-4 text-sm uppercase tracking-[0.26em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.25rem] border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Topic rail
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Topics organized with less noise and more breathing room.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {topicPills.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                Featured dispatches
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">
                A more deliberate editorial grid.
              </h2>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-custom transition hover:translate-x-0.5"
            >
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {secondary.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
              <article className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={safeImage(secondary[0]?.mainImage)}
                    alt={secondary[0]?.title ?? "Featured article"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    <span>Lead story</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{formatDate(secondary[0]?.publishedAt)}</span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">
                    {secondary[0]?.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {secondary[0]?.shortDesc}
                  </p>
                  {secondary[0]?.slug?.current ? (
                    <Link
                      href={`/blogs/${secondary[0].slug.current}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-custom transition hover:translate-x-0.5"
                    >
                      Read the full post
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </article>

              <div className="grid gap-5">
                {secondary.slice(1).map((post) => (
                  <Link
                    key={post.slug.current}
                    href={`/blogs/${post.slug.current}`}
                    className="group grid gap-4 rounded-[1.75rem] border border-border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-foreground/15"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                      <Image
                        src={safeImage(post.mainImage)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <p className="max-h-20 overflow-hidden text-sm leading-7 text-muted-foreground">
                        {post.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border bg-card p-10 text-center">
              <p className="text-lg font-medium text-foreground">
                No stories available yet.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Once content lands, the page will fill with curated story cards
                and image-led previews.
              </p>
            </div>
          )}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.25rem] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                  Latest notes
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Newest articles in a calmer list.
                </h2>
              </div>
              <ChartLine className="h-5 w-5 text-custom" weight="duotone" />
            </div>

            <div className="mt-8 space-y-5">
              {latest.length > 0 ? (
                latest.map((post) => (
                  <Link
                    key={post.slug.current}
                    href={`/blogs/${post.slug.current}`}
                    className="group flex flex-col gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0 sm:flex-row"
                  >
                    <div className="relative h-36 w-full overflow-hidden rounded-[1.35rem] border border-border sm:h-24 sm:w-40">
                      <Image
                        src={safeImage(post.mainImage)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span className="h-px w-6 bg-border" />
                        <span>{post.author?.name}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                        {post.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent articles found.</p>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2.25rem] border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                Reading posture
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Built for slower reading and better scanning.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The new system keeps surfaces quiet, uses one accent only, and
                avoids the glossy card stacks that flatten content hierarchy.
              </p>
            </div>

            <div className="rounded-[2.25rem] border border-border bg-secondary/60 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                Prompt
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Keep the page clear, let the writing breathe, and let the images
                carry the emphasis.
              </p>
            </div>
          </aside>
        </section>

        <section className="rounded-[2.5rem] border border-border bg-custom px-6 py-10 text-custom-foreground shadow-sm sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.34em] text-custom-foreground/80">
                Stay in the loop
              </p>
              <h2 className="text-3xl font-semibold text-custom-foreground">
                A quieter editorial system still needs a strong final invitation.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-custom-foreground/80">
                Use the blog archive, contact page, and article detail pages as
                one connected reading path.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition hover:-translate-y-px"
              >
                Explore archive
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm font-medium text-custom-foreground transition hover:-translate-y-px hover:bg-background/10"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
