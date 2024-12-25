import React from 'react';

interface CommentType {
  comment: string;
  name: string;
  email: string;
}

const Comments = async () => {
  const fetchingData = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/comments`, {
        next: {
          revalidate: 10,
        },
      });

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
      return []; // Return an empty array on error
    }
  };

  const fetchData: CommentType[] = await fetchingData();

  return (
    <div className='my-14 mx-20'>
      <h1 className='my-5'>Comments</h1>
      {fetchData.length > 0 ? (
        fetchData.map((comment) => (
          <div key={comment.email} className='space-y-3'>
            <h2 className='font-semibold'>{comment.name}</h2>
            {/* <h3 className='text-gray-500'>{comment.email}</h3> */}
            <p>{comment.comment}</p>
          </div>
        ))
      ) : (
        <p>No comments available.</p> // Handle case where no comments are found
      )}
    </div>
  );
};

export default Comments;
