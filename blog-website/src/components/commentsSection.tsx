"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const fetchComments = async () => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/comments`);

    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid data format");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const AddComment = ({ postId }: { postId: string }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<any[]>([]);
  
  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      const data = await fetchComments();
      setComments(data);
      setLoading(false);
    };
    
    loadComments();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ name: string; email: string; comment: string }>();

  const onSubmit = async (data: { name: string; email: string; comment: string }) => {
    const { name, email, comment } = data;

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, comment, postId }),
      });

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      reset(); // Reset the form after successful submission
      // Optionally refetch comments or add the new comment to the state
      const updatedComments = await fetchComments();
      setComments(updatedComments);
    } catch (error) {
      console.error("An error occurred while adding the comment:", error);
      setError("Failed to submit your comment. Please try again.");
    }
  };

  return (
    <div className="mt-14">
      <p>
        Leave a comment <span role="img" aria-label="speech bubble">💬</span>
      </p>
      
      {error && <p className="text-red-600">{error}</p>}
      
      <form
        className="flex flex-col border dark:border-purple-950 shadow-sm rounded px-8 pt-6 pb-6 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", { required: true })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.name && (
          <p className="text-red-600 text-xs">Name is required.</p>
        )}

        <label htmlFor="email">
          Email{" "}
          <span className="text-xs">(Your email will not be published!)</span>
        </label>
        <input
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.email && (
          <p className="text-red-600 text-xs">
            Please enter a valid email address.
          </p>
        )}

        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          {...register("comment", { required: true, minLength: 2 })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.comment && (
          <p className="text-red-600 text-xs">Minimum 2 characters.</p>
        )}

        <input
          className={`cursor-pointer bg-purple-500 text-white rounded py-2 hover:bg-purple-600 ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
        />
      </form>

      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="border-b mb-2 pb-2">
              <strong>{comment.name}</strong>:<br />
              <span className="">{comment.comment}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddComment;
