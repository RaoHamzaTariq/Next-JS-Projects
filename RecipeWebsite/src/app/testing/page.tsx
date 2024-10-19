import React from 'react'

const Testing = async () => {
    const fetchData = async () => {
        try {
            const apiResponse = await fetch("http://localhost:3000/api/testing");
            if(!apiResponse){
                throw new Error("Network was not working...")
            }
            const data = await apiResponse.json();
            return data
        } catch (error) {
            console.log(error);
            return []
        }
    } 

    const data = await fetchData()

    if(!data){
        return <div className='w-screen text-center text-5xl font-bold flex justify-center items-center'>No data</div>
    }

  return (<>
    <div>
   
    </div>
    <div className='w-screen text-center text-5xl font-bold flex justify-center items-center'>Testing Data</div>
    <p>{data.name}</p>
    </>
  )
}

export default Testing