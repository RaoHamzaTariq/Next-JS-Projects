import React from 'react'

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
      const fetchData = await fetchingData() || []  
  return (
    <div className='my-14 mx-20'>
        {fetchData.map((comment: { name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; email: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; comment: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; })=>(
            <div className='space-y-3'>
            <h1>{comment.name}</h1>
            <h2>{comment.email}</h2>

            <p>{comment.comment}</p>
            </div>
        ))}
    </div>
    
  )
}

export default Comments