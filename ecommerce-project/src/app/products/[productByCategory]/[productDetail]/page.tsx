'use client'
import React from 'react';
import { useParams } from 'next/navigation';

const ProductDetail = () => {
  const params = useParams()
  const id = params.productDetail
  console.log(id);
  
  return (
    <div>
      {id}
    </div>
  );
}

export default ProductDetail;
