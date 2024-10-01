import Link from 'next/link';
import React from 'react';
import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams()
  const id = params.productDetail
  console.log(id);
  
  return (
    <div>
      {id}
    </div>
  );
}

export default page;
