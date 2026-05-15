"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  id: string; 
  carId: string;
  carName: string;
  carBrand: string;
  carImage: string;
  mode: "RENT" | "LEASE" | "BUY";
  startDate: string;
  endDate: string;
  totalCost: number;
  advance: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalAdvance: number;
  totalCost: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("luxury_cart");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("luxury_cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addToCart = (item: Omit<CartItem, "id">) => {
    setItems((prev) => [...prev, { ...item, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalAdvance = items.reduce((acc, item) => acc + item.advance, 0);
  const totalCost = items.reduce((acc, item) => acc + item.totalCost, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalAdvance, totalCost }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
