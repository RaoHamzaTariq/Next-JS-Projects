
"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {useCart} from "@/components/ContextForCart"
import { CartProducts } from '../data'

const Cart = () => {

  const {cart} = useCart()
  
  return (
    <main className='pt-32 py-10'>
      <div>
        <h1>My Cart</h1>
        <div className='flex flex-row gap-48'>
          <div className='basis-[60%]'>
            <div className='flex justify-between items-baseline border-b'>
            <div>
              <h3>Product Name</h3>
            </div>
            <div className='flex gap-4 justify-between items-baseline'>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>
            </div>
            <div>
            { cart.map((item:CartProducts)=>(
              <div key={item.id}>
                <div>
              <img src={item.thumbnail} alt={''}/>
            </div>
            <div className='flex flex-col gap-4'>
              <h3>{item.title}</h3>
              <h3>{item.category}</h3>
              <h3>Qty-{item.quantity}</h3>
            </div>
            </div>
            ))
              
            }
            </div>
            
            
          </div>
          <div className='basis-[40%]'>
            <h2>Order Summary</h2>
            <div className='flex'>
              <div>
                <h3>Subtotal</h3>
                <h3>Discount</h3>
                <h3>Delivery Fee</h3>
                <h3>Grand Total</h3>
              </div>
              <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div>
              <Link href={''}><Button>Place Order</Button></Link>
              <Link href={"/products/all"}><Button variant={'outline'}>Continue Shopping</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart


