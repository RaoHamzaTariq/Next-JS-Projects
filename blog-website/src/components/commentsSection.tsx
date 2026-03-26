"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Comment } from "@/data/interfaces";

const fetchComments = async () => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/comments`);

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
};

const AddComment = ({ postId }: { postId: string }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      const data = await fetchComments();
      const filteredData = data.filter(
        (comment: { post: { _ref: string } }) => comment.post?._ref === postId
      );
      setComments(filteredData);
      setLoading(false);
    };

    loadComments();
  }, [postId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ name: string; email: string; comment: string }>();

  const onSubmit = async (data: {
    name: string;
    email: string;
    comment: string;
  }) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, postId }),
      });

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      reset();
      const updatedComments = await fetchComments();
      setComments(
        updatedComments.filter(
          (comment: { post: { _ref: string } }) => comment.post?._ref === postId
        )
      );
      setError(null);
    } catch (err) {
      console.error("An error occurred while adding the comment:", err);
      setError("Failed to submit your comment. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      <form
        className="space-y-5 rounded-[2rem] border border-border bg-background p-5 shadow-sm sm:p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h3 className="text-xl font-semibold text-foreground">Leave a comment</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a note on the article. Your email is kept private.
          </p>
        </div>

        {error ? (
          <p className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: true })}
            placeholder="Your name"
          />
          {errors.name ? (
            <p className="text-sm text-destructive">Name is required.</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            placeholder="your@email.com"
          />
          {errors.email ? (
            <p className="text-sm text-destructive">
              Please enter a valid email address.
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            rows={6}
            {...register("comment", { required: true, minLength: 2 })}
            placeholder="Write your response"
          />
          {errors.comment ? (
            <p className="text-sm text-destructive">
              Minimum 2 characters required.
            </p>
          ) : null}
        </div>

        <button
          className="inline-flex w-full items-center justify-center rounded-full bg-custom px-6 py-3 text-sm font-medium text-custom-foreground shadow-sm transition hover:-translate-y-px hover:bg-custom/90 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Submit comment"}
        </button>
      </form>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">Recent replies</h3>
          <span className="text-sm text-muted-foreground">
            {comments.length} total
          </span>
        </div>

        {loading ? (
          <div className="space-y-3">
            <div className="h-24 animate-pulse rounded-[2rem] border border-border bg-card" />
            <div className="h-24 animate-pulse rounded-[2rem] border border-border bg-card" />
          </div>
        ) : comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment: Comment) => (
              <article
                key={comment._id}
                className="rounded-[2rem] border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    {comment.name}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    {new Intl.DateTimeFormat("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(comment._createdAt))}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {comment.comment}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No responses for this article yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddComment;
