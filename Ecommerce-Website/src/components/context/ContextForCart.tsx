"use client";
import { CartProducts } from "@/app/data";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
  cart: CartProducts[];
  addToCart: (item: CartProducts) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProducts[]>([]);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  const addToCart = (item: CartProducts) => {
    console.log("Item to be added:", item);

    if (!item || !item.id || !item.title || !item.price) {
      console.error("Invalid item added to cart:", item);
      return;
    }

    setCart((prevCart) => [...prevCart, item]);

    console.log("Cart after addition:", [...cart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
