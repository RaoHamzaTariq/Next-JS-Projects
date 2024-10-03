"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/components/ContextForCart";
import { Input } from "@/components/ui/input";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  
  const subTotals = cart.reduce((accumulator, item) : number => {
    return accumulator + (item.subTotal || 0);
  }, 0)
  const discountPercentage : number = 5

  const OrderSummary = {
    subTotals: subTotals.toFixed(2),
    discount : (subTotals * (discountPercentage/100)).toFixed(2),
    deliveryFee : 3,
    grandTotal : ((subTotals - (subTotals*(discountPercentage/100))) + 3).toFixed(2)
  }

  return (
    <main className="pt-32 py-10 mx-5 sm:mx-20">
      <div>
        <div>
        <h1 className="text-4xl">My Cart</h1>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-48">
          <div className="basis-[60%]">
            <div className="flex justify-between items-baseline border-b my-5 ">
              <div className="basis-[50%]">
                <h3 className="sm:text-lg text-base">Product Name</h3>
              </div>
              <div className="flex basis-[50%] gap-2 sm:gap-7 justify-between items-baseline">
                <h3 className="sm:text-lg text-base">Price</h3>
                <h3 className="sm:text-lg text-base">Quantity</h3>
                <h3 className="sm:text-lg text-base">Subtotal</h3>
              </div>
            </div>
            <div>
              {
                cart.map((item)=>(
                  <div key={item.id} className="flex justify-between">
                <div className="flex my-5 sm:gap-2">
                  <div className="hidden sm:block">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-32 h-auto aspect-square"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <p className="text-xl font-semibold -mb-4">
                      {item.title}
                    </p>
                    <p className="text-lg -mb-4 text-gray-700 dark:text-gray-400">{item.category}</p>
                    <p className="text-gray-700 text-lg dark:text-gray-400">Qty-{item.quantity}</p>
                  </div>
                </div>
                <div className="ml-20">
                  <div className="flex gap-5 sm:gap-20 items-baseline py-3 text-lg ">
                    <p>${item.price}</p>
                    <p>{item.quantity}</p>
                    <p>${item.subTotal}</p>
                  </div>
                  <div className="mt-5 flex flex-col sm:flex-row sm:gap-7">
                    <Button
                      className="underline hover:no-underline font-semibold text-blue-950"
                      variant={"link"}
                    >
                      Add to Favourite
                    </Button>
                    <Button
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                      className="underline hover:no-underline font-semibold text-red-600"
                      variant={"link"}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
                ))
              }
              
            </div>
          </div>
          <div className="basis-[40%] lg:mt-20">
            <h2 className="text-2xl">Order Summary</h2>
            <div className="grid grid-cols-2  sm:gap-28 mt-8">
              <div className="flex flex-col">
                <p className="-mb-5 text-lg">Subtotal</p>
                <p className="-mb-5 text-lg">Discount</p>
                <p className="-mb-5 text-lg">Delivery Fee</p>
                <p className="font-semibold text-lg">Grand Total</p>
              </div>
              <div className="flex flex-col">
                <p className="-mb-5 text-lg text-right">${OrderSummary.subTotals}</p>
                <p className="-mb-5 text-lg text-right">-${OrderSummary.discount}</p>
                <p className="-mb-5 text-lg text-right">${OrderSummary.deliveryFee}</p>
                <p className="font-semibold text-lg text-right">${OrderSummary.grandTotal}</p>
              </div>
            </div>
            <div className="mt-7 flex gap-5 sm:gap-20">
              <Link href={""}>
                <Button className="sm:w-40 w-fit  ">Place Order</Button>
              </Link>
              <Link href={"/products/all"}>
                <Button className="sm:w-40 w-fit " variant={"outline"}>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 container mx-auto">
          <h3 className="text-2xl">Apply Coupon Code</h3>
          <Input placeholder="Apply Coupon Code" className="w-64 mt-5" />
        </div>
      </div>
    </main>
  );
};

export default Cart;
