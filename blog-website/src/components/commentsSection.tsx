"use client";
import { useForm } from "react-hook-form";



const AddComment = ({ postId }: {postId:string}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ name: string; email: string; comment: string }>();

  const onSubmit = async (data: { name: string; email: string; comment: string }) => {
    const { name, email, comment } = data;


    try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the correct content type
        },
        body: JSON.stringify({ name, email, comment, postId }),
      });

      if (!res.ok) {
        console.error("Failed to add comment");
        return;
      }

      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("An error occurred while adding the comment:", error);
    }
  };

  return (
    <div className="mt-14">
      <p>
        Leave a comment <span role="img" aria-label="speech bubble">💬</span>
      </p>
      <form
        className="flex flex-col border dark:border-purple-950 shadow-sm rounded px-8 pt-6 pb-6 mb-10"
        onSubmit={handleSubmit(onSubmit)} // Directly pass onSubmit to handleSubmit
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
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Updated regex for better email validation
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
    </div>
  );
};

export default AddComment;
