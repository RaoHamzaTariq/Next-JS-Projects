import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data';
import { FaStar } from "react-icons/fa";

const ProductCard = (props: { product: Product }) => {
    const { product } = props;

    // Check if product is defined and has the necessary properties
    if (!product || !product.thumbnail || !product.title || product.price === undefined) {
        return null; // or some fallback UI
    }

    return (
        <div>
            <Card className="rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:transition">
                <div className='relative'>
                    <p className='text-sm p-1 bg-black rounded-md left-3 top-3 absolute text-white text-center'>
                        -{product.discountPercentage}%
                    </p>
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 no-underline">
                        {product.title}
                    </h3>
                    <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={`text-sm  ${i < product.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mx-3 mb-4">
                    <span className="font-bold text-xl">${product.price}</span>
                    <Link href={`/products/${product.category}/${product.id}`}>
                        <Button size="sm">Add to Cart</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default ProductCard;