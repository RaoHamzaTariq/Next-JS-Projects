"use client"; 
import { Auth_Data } from "@/context/login/context";
import { useContext } from "react";


export default  function Home() {

  const data = useContext(Auth_Data)
  console.log(data);
  if(!data){
    return <div>Something went wrong</div>
  }

  return (
    <div>
      <h1>{data?.isLogin}</h1>
      <button onClick={()=>{data.update! ? data.update({isLogin:false}) : null}}>Update Value</button>
      <br />
    </div>
  );
}
  