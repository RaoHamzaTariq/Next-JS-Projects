"use client";

import { useToast } from "@/hooks/use-toast";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
// import { IoBagOutline } from "react-icons/io5";
import { useCart } from "@/components/ContextForCart";
import { Product, Reviews } from "@/app/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";


// export const StarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// };

// export const renderStars = (rating: number) => {
//   // const totalStars = 5;
//   // const filledStars = Math.floor(rating);
//   // const emptyStars = totalStars - filledStars;

//   return (
//     <div className="flex items-center gap-0.5">
//       {/* {Array.from({ length: filledStars }).map((_, i) => (
//         <StarIcon
//           key={`filled-${i}`}
//           className="w-5 h-5 fill-primary border-none"
//         />
//       ))}
//       {Array.from({ length: emptyStars }).map((_, i) => (
//         <StarIcon
//           key={`empty-${i}`}
//           className="w-5 h-5 fill-muted border-none stroke-muted-foreground"
//         />
//       ))} */}
//       <p>Rating: {rating}</p>
//     </div>
//   );
// };

const ProductDetails = ({ params }: { params: { productDetail: number } }) => {
  const { toast } = useToast();

  const [productData, setProductData] = useState<Product | null>(null);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("Reviews");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart, cart } = useCart();

  useEffect(() => {
  async function fetchData(id: number) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductData(data);
      setThumbnail(data.thumbnail);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  fetchData(params.productDetail);
  }, [params.productDetail]);

  useEffect(() => {
  async function fetchRelatedProducts(category: string) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch related products");
      }
      const data = await response.json();
      setRelatedProducts(data.products);
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  }

  if (productData) {
    const formattedCategory = productData.category
      .toLowerCase()
      .split(" ")
      .join("-");
    fetchRelatedProducts(formattedCategory);
  }
  }, [productData]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product: Product) => {
    console.log("Product to add:", product);

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: quantity,
      category: product.category,
      brand: product.brand,
      subTotal: parseFloat((product.price * quantity).toFixed(0)),
    });
    console.log(cart);
    console.log(cart.length);
  };

  const ImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLImageElement;
    setThumbnail(target.src);
  };

  const handleActiveButton = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <section className="container mx-auto px-4 md:px-6 py-36 box-border">
        <div className="grid md:grid-cols-2 gap-6 items-start max-w-6xl md:gap-52 md:mx-20">
          <div className="grid gap-4 md:gap-10 items-start">
            <div className="space-y-3">
              <div className="grid gap-4">
                <div className="flex flex-col gap-0">
                  <h1 className="font-bold text-3xl lg:text-4xl">
                    {productData.title}
                  </h1>
                  {productData.brand ? (
                    <h2 className="sm:text-lg lg:text-xl text-gray-700 border-none dark:text-gray-200">
                      {productData.brand}
                    </h2>
                  ) : (
                    <></>
                  )}
                </div>
                <div className=" w-10/12">
                  <p className="w-fit">{productData.description}</p>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  {productData.rating}
                  <h4 className="text-gray-500">
                    ({productData.reviews?.length || 0}) Ratings
                  </h4>
                </div>
              </div>
              <div className="ml-auto flex flex-col sm:flex-row sm:gap-5 items-center justify-start">
                <h3 className="text-5xl font-bold">
                  $
                  {(
                    productData.price -
                    (productData.discountPercentage * productData.price) / 100
                  ).toFixed(2)}
                </h3>
                <h3 className="text-4xl border-none line-through text-gray-400">
                  ${productData.price}
                </h3>
                <h3 className="text-2xl text-orange-500">
                  {productData.discountPercentage}% OFF
                </h3>
              </div>
            </div>
            <div className="grid gap-4 md:gap-10">
              <div className="flex items-baseline  gap-8 mx-5 sm:mx-0">
                <h3>Quantity:</h3>
                <div className="flex gap-5 justify-center items-center">
                  <Button
                    variant={quantity > 1 ? "default" : "outline"}
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prevQuantity) => prevQuantity - 1);
                      }
                    }}
                    className=""
                  >
                    -
                  </Button>
                  <h4>{quantity}</h4>
                  <Button
                    onClick={() => {
                      setQuantity((quantity) => quantity + 1);
                    }}
                    className=""
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex gap-5 mt-5 sm:mx-0  mx-3">

              <Button
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Successful",
                    description: `${quantity} ${productData.title} added to cart`,
                    action: (
                      <ToastAction altText="Go to cart">
                        <Link href={"/cart"} className="no-underline">
                          More Details
                        </Link>
                      </ToastAction>
                    ),
                  });
                  handleAddToCart(productData);
                }}
              >
                <MdOutlineShoppingCart className="text-lg font-semibold mr-1 sm:mr-3"/>Add to Cart
              </Button>
              <Button variant={"outline"} className="w-full"><CiHeart className="text-lg font-semibold mr-1 sm:mr-3"/>Add to Favourite</Button>
              </div>
              
            </div>
          </div>
          <div className="grid gap-3 items-start">
            <Image
              src={thumbnail}
              alt="Product Image"
              width={600}
              height={600}
              className="aspect-square object-cover border  w-fit sm:w-full rounded-lg overflow-hidden"
            />
            <div className="hidden md:!flex gap-4 items-start">
              {productData.images?.map((pic: string, index: number) => (
                <button
                  onClick={ImageClick}
                  key={pic}
                  className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
                >
                  <Image
                    src={pic}
                    alt={`Preview thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="aspect-square object-cover"
                  />
                  <span className="sr-only">View Image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 bg-gray-100 dark:bg-gray-800 rounded-md flex sm:flex-row flex-col items-center p-2 gap-2 sm:gap-5">
            <Button
              className="text-gray-700 dark:text-gray-200 w-fit"
              variant={activeButton === "Reviews" ? "outline" : "link"}
              onClick={() => {
                handleActiveButton("Reviews");
              }}
            >
              Reviews
            </Button>
            <Button
              className="text-gray-700 dark:text-gray-200 w-fit"
              variant={activeButton === "More Information" ? "outline" : "link"}
              onClick={() => {
                handleActiveButton("More Information");
              }}
            >
              More Information
            </Button>
            <Button
              className="text-gray-700 dark:text-gray-200 w-fit"
              variant={activeButton === "Related Products" ? "outline" : "link"}
              onClick={() => {
                handleActiveButton("Related Products");
              }}
            >
              Related Products
            </Button>
          </div>
          <div>
            <div
              className={`${activeButton === "Reviews" ? "block" : "hidden"}`}
            >
              <h2 className="pt-3">Reviews</h2>
              <div className="flex flex-col justify-center gap-5 mt-5">
                {productData.reviews.map((review: Reviews) => (
                  <div
                    key={review.comment}
                    className="flex flex-col justify-center gap-3"
                  >
                    <div className="flex justify-between items-baseline">
                      <p>{review.rating}</p>
                      <p>{review.date}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <p className="text-gray-800">{review.comment}</p>
                      <h4 className="font-bold text-lg">
                        {review.reviewerName}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`${
                activeButton === "More Information" ? "block" : "hidden"
              }`}
            >
              <h2 className="pt-3">More Information</h2>
              <ul className="flex flex-col justify-center gap-2 mt-5 text-gray-700 dark:text-gray-200">
                <li className="text-lg">
                  Warranty Detail: {productData.warrantyInformation}
                </li>
                <li className="text-lg">
                  Shipping Detail: {productData.shippingInformation}
                </li>
                <li className="text-lg">
                  Return Policy for this product: {productData.returnPolicy}
                </li>
                <li className="text-lg">Weight: {productData.weight}</li>
              </ul>
              <ul className="flex flex-col justify-center mt-3 text-gray-700 dark:text-gray-200">
                <li className="text-xl font-bold list-none pb-3">Dimensions</li>
                <li className="text-lg">
                  Width {productData.dimensions.height}:
                </li>
                <li className="text-lg">
                  Height: {productData.dimensions.width}
                </li>
                <li className="text-lg">
                  Depth: {productData.dimensions.depth}
                </li>
              </ul>
            </div>
            <div
              className={`${
                activeButton === "Related Products" ? "block" : "hidden"
              }`}
            >
              <h2 className="py-3">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-7">
                {relatedProducts.length > 0 &&
                  relatedProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
