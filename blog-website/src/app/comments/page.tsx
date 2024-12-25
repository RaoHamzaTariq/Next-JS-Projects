import React from 'react'

interface commenttype{
    comment: string,
    name: string,
    email:string
}

const Comments = async () => {

    const fetchingData = async () =>{
        try {
          
          const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/comments`,
      {
        next:{
          revalidate:10
        }
      });
          if(!response){
            throw new Error("Failed to fetch data!")
          }
          const data = await response.json()
          if (!data || !data.data || !Array.isArray(data.data)) {
            throw new Error("Invalid data format");
          }
          return data.data
        } catch (error) {
          console.log(error)
    
          return []; 
        }
        
      }
      const fetchData:commenttype[] = await fetchingData() || []  
  return (
    <div className='my-14 mx-20'>
        <h1 className='my-5'>COmments</h1>
        {fetchData.map((comment: commenttype)=>(
            <div key={comment.name} className='space-y-3'>
            <h1>{comment.name}</h1>
            <h2>{comment.email}</h2>

            <p>{comment.comment}</p>
            </div>
        ))}
    </div>
    
  )
}

export default Comments