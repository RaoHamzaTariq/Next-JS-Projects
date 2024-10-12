"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../components/ContextForCart";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CheckOut = () => {
  const { cart } = useCart();

  return (
    <div className="py-52 mx-10">
      <h1>Checkout</h1>
      <div className="flex flex-col md:flex-row gap-52 items-baseline">
        <div className="w-[750px] basis-[60%]">
            <Accordion type="single" collapsible className="p-0 m-0">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold">Add New Address</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-5 ">
                    <div className="">
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input type="text" placeholder="Enter Name" />
                    </div>
                    <div>
                      <Label htmlFor="number">Mobile Number</Label>
                      <Input type="number" placeholder="Enter Number" />
                    </div>
                    <div>
                      <Label htmlFor="streetaddress">Street Address</Label>
                      <Input type="text" placeholder="Enter Address" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input type="text" placeholder="Enter State" />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" placeholder="Enter City" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pin Code</Label>
                      <Input type="number" placeholder="Enter Pin Code" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
        <div className="basis-[40%]">
          <h2>Order Summary</h2>
          <div>
            {cart &&
              cart.map((item) => (
                <div className="flex">
                  <div>
                    <Image src={item.thumbnail} alt="" width={50} height={50} />
                  </div>
                  <div className="flex flex-col ">
                    <p>Title</p>
                    <p>Category</p>
                    <p>Quantity</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
