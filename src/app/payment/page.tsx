"use client";

import { useRouter } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import PremiumFill from "@/components/PremiumFill";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

function PaymentForm() {
  const router = useRouter();
  const { items, totalAdvance, totalCost, clearCart } = useCart();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setIsProcessing(true);

    try {
      // Process all bookings in the cart
      const bookingPromises = items.map(item => 
        fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            carId: item.carId,
            startDate: item.startDate,
            endDate: item.endDate,
            totalCost: item.totalCost,
            customerId: user?.id,
          })
        })
      );

      const results = await Promise.all(bookingPromises);
      const allOk = results.every(res => res.ok);

      if (allOk) {
        clearCart();
        router.push("/dashboard/customer");
      } else {
        alert("Some bookings failed. Please check your dashboard.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-24 relative z-10">
        <h2 className="text-3xl font-black mb-4">No items to checkout</h2>
        <button onClick={() => router.push("/fleet")} className="btn-premium-glow px-8 py-3">RETURN TO FLEET</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
      
      {/* Summary Col */}
      <div>
        <h2 className="text-3xl font-black tracking-tight mb-8">Order Summary</h2>
        <div className="bg-surface p-8 rounded-3xl border border-border">
          <div className="mb-6 pb-6 border-b border-white/5 space-y-4 max-h-64 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">{item.carName}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.mode}</p>
                </div>
                <p className="font-bold text-sm">${item.advance.toLocaleString()} advance</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center text-white/60 text-sm">
              <span>Total Fleet Value</span>
              <span>${totalCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-black mt-4">
              <span>Total Advance Required</span>
              <span className="text-accent">${totalAdvance.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form Col */}
      <div>
        <h2 className="text-3xl font-black tracking-tight mb-8">Secure Checkout</h2>
        <form onSubmit={handlePayment} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-border backdrop-blur-md">
          
          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Cardholder Name</label>
            <input required type="text" placeholder="John Doe" className="w-full bg-white border border-border rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:border-accent transition-colors" />
          </div>

          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Card Number</label>
            <input required type="text" placeholder="0000 0000 0000 0000" maxLength={19} className="w-full bg-white border border-border rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:border-accent transition-colors tracking-widest font-mono" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Expiry</label>
              <input required type="text" placeholder="MM/YY" maxLength={5} className="w-full bg-white border border-border rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:border-accent transition-colors text-center" />
            </div>
            <div>
              <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">CVC</label>
              <input required type="text" placeholder="123" maxLength={4} className="w-full bg-white border border-border rounded-xl p-4 text-black placeholder-gray-500 focus:outline-none focus:border-accent transition-colors text-center" />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isProcessing}
            className="btn-premium-glow w-full py-5 mt-4 text-lg tracking-wide disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                AUTHORIZING...
              </>
            ) : (
              `PAY $${totalAdvance.toLocaleString()}`
            )}
          </button>
          
          <p className="text-center text-white/40 text-xs mt-4 flex items-center justify-center gap-2">
            🔒 SSL Encrypted Checkout
          </p>
        </form>
      </div>

    </div>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-0 relative overflow-hidden flex flex-col">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="flex-grow">
        <Suspense fallback={<div className="text-center pt-32">Loading Checkout...</div>}>
          <PaymentForm />
        </Suspense>
      </div>

      <PremiumFill />
    </main>
  );
}
