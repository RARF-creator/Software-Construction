"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import PremiumFill from "@/components/PremiumFill";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeFromCart, totalAdvance, totalCost } = useCart();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-0 relative overflow-hidden flex flex-col">
      {}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex-grow w-full">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
          Your Fleet
        </h1>

        {items.length === 0 ? (
          <div className="bg-surface p-16 rounded-3xl border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Your hangar is empty.</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">You haven't selected any vehicles yet. Explore our world-class fleet to begin your journey.</p>
            <Link href="/fleet">
              <button className="btn-premium-glow px-8 py-4">BROWSE FLEET</button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-surface p-6 rounded-3xl border border-border flex flex-col md:flex-row gap-8 items-center relative group">
                  
                  {}
                  <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <Image src={item.carImage} alt={item.carName} fill className="object-cover" />
                  </div>

                  {}
                  <div className="flex-grow w-full">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-accent text-xs font-bold uppercase tracking-widest">{item.carBrand}</h4>
                        <h3 className="text-xl font-black tracking-tight">{item.carName}</h3>
                      </div>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                        {item.mode}
                      </span>
                    </div>

                    {item.mode !== "BUY" && (
                      <p className="text-sm text-white/60 mb-4">
                        {new Date(item.startDate).toLocaleDateString()} — {new Date(item.endDate).toLocaleDateString()}
                      </p>
                    )}

                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/5">
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Total Cost</p>
                        <p className="text-lg font-bold">${item.totalCost.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-xs font-bold uppercase tracking-widest"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {}
            <div>
              <div className="bg-gradient-to-br from-surface to-background p-8 rounded-3xl border border-border sticky top-32">
                <h3 className="text-2xl font-black tracking-tight mb-8">Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Taxes & Fees</span>
                    <span>Included</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-center text-xl font-black">
                    <span>Total Cost</span>
                    <span>${totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold text-accent uppercase tracking-widest">Required Advance</span>
                    <span className="text-xl font-black text-accent">${totalAdvance.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => router.push("/payment")}
                  className="btn-premium-glow w-full py-5 text-lg tracking-wide flex justify-center items-center gap-2"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>

          </div>
        )}
      </div>

      <PremiumFill />
    </main>
  );
}
