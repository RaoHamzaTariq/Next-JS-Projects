import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { Product } from '@/app/data'
import { renderStars } from '@/app/products/[productByCategory]/[productDetail]/page'

const ProductCard = (props:{product:Product}) => {

    const { product } = props

  return (
    <div>
        <Card
                
    className="rounded-lg shadow-lg overflow-hidden"
  >
    <img
      src={product.thumbnail}
      alt="Product 1"
      width={400}
      height={300}
      className="w-full h-64 object-cover"
      style={{ aspectRatio: "400/300", objectFit: "cover" }}
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 no-underline">
        {product.title}
      </h3>
      <p className=" text-sm mb-4">{renderStars(product.rating)}</p>
      <div className="flex items-center justify-between">
        <span className="">${product.price}</span>
        <Link href={`/products/${product.category}/${product.id}`}>
          {" "}
          <Button size="sm">Add to Cart</Button>{" "}
        </Link>
      </div>
    </div>
  </Card>
  </div>
  )
}

export default ProductCard