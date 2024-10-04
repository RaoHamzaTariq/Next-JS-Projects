"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/app/data";
import Image from "next/image";
import productPagePic from "../../../../public/shopping-festival.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";

export default function ProductByCategory() {
  const router = useParams();
  const productCategory = router.productByCategory as string;
  const [product, setProduct] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchingData(id: string) {
      if (productCategory === "all") {
        const allData = await fetch(`https://dummyjson.com/products`);
        setProduct(await (await allData.json()).products);
      } else {
        const data = await fetch(
          `https://dummyjson.com/products/category/${id}`
        );
        setProduct(await (await data.json()).products);
      }
    }
    fetchingData(productCategory);
  }, [productCategory]);

  const handleSort = (option: string) => {
    setSortOption(option);
    let sortedProducts;

    if (option === "price") {
      sortedProducts = product.sort((a, b) => b.price - a.price);
    } else if (option === "discountPercentage") {
      sortedProducts = product.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (option === "rating") {
      sortedProducts = product.sort((a, b) => b.rating - a.rating);
    } else {
      sortedProducts = product;
    }

    setProduct(sortedProducts);
    console.log(sortOption);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="pt-24">
        <div className="flex flex-col md:flex-row lg:gap-10 justify-around items-center bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-black dark:to-gray-900  mb-5">
          <Image
            className="object-cover"
            src={productPagePic}
            width={500}
            height={500}
            alt="Product Page Pic"
          />
          <div className="pb-10 px-5 lg:p-2 text-center">
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold">
              UPTO 70% OFF
            </h3>
            <h3 className="text-3xl sm:text-5xl lg:text-7xl">
              SHOPPING FESTIVAL
            </h3>
          </div>
        </div>
      </div>

      <section className="container box-border sm:mx-auto px-4 md:px-6 py-10">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl font-semibold">Results:</h3>
            <p className="bg-slate-200 w-10 text-center">{product.length}</p>
          </div>

          <div className="flex gap-2 items-center">
            <h4 className="text-xl font-semibold">Sort By:</h4>
            <Select onValueChange={handleSort}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select a properties" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Properties</SelectLabel>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="discountPercentage">Discount %</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {product.length > 0 ? (
            product.map((product: Product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="w-full text-center my-20">Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
}
