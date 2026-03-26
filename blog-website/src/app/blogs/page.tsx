import BlogHoriCard from "@/components/bloghori-card";
import { BlogPostCard } from "@/data/interfaces";
import { Filter, Search } from "lucide-react";

async function fetchPosts(): Promise<BlogPostCard[]> {
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

    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const filters = ["All", "Design", "Frontend", "AI", "Workflow"];

export default async function Blogs() {
  const posts = await fetchPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-8 rounded-[2.5rem] border border-border bg-card p-6 shadow-sm lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
            Blog archive
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Articles arranged like a catalog, not a billboard.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Browse the full archive with cleaner spacing, softer surfaces, and
            a layout that keeps the reading path obvious.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-secondary/50 p-5">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles"
                className="pl-10"
              />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full px-4 py-2 text-sm ${
                  index === 0
                    ? "bg-custom text-custom-foreground"
                    : "border border-border bg-background text-muted-foreground"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-5">
          {posts.length > 0 ? (
            posts.map((post: BlogPostCard) => (
              <BlogHoriCard
                key={post.slug?.current}
                slug={post.slug?.current}
                title={post.title}
                shortDesc={post.shortDesc}
                mainImage={post.mainImage}
                author={post.author}
                publishedAt={post.publishedAt}
              />
            ))
          ) : (
            <div className="rounded-[2rem] border border-dashed border-border bg-card p-10 text-center">
              <p className="text-lg font-medium text-foreground">
                No posts found yet.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                The archive will populate once content is available.
              </p>
            </div>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Archive notes
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Sorted for quick scanning</li>
              <li>Single accent color only</li>
              <li>Cards remain restrained</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-border bg-secondary/60 p-6">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Tip
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              Use the article page when you want the full story flow, author
              context, and discussion section in one place.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
