import { Comment } from "@/data/interfaces";

async function fetchComments(): Promise<Comment[]> {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/comments`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.data)) {
      throw new Error("Invalid comment data");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Comments() {
  const comments = await fetchComments();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
            Comments
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Reader notes and discussion.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            A quieter comments screen with softer borders, better spacing, and
            a structure that makes recent responses easier to scan.
          </p>

          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <article
                  key={comment._id}
                  className="rounded-[2rem] border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        {comment.name}
                      </h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {new Intl.DateTimeFormat("en", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }).format(new Date(comment._createdAt))}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {comment.comment}
                  </p>
                </article>
              ))
            ) : (
              <div className="rounded-[2rem] border border-dashed border-border bg-card p-10 text-center">
                <p className="text-lg font-medium text-foreground">
                  No comments yet.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Once readers respond on an article page, their comments will
                  appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Moderation
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              Comments are collected on individual article pages and brought
              here in a simplified list for review.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-secondary/60 p-6">
            <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
              Tone
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              Clean labels, no decorative icons, and no noisy background
              treatments.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
