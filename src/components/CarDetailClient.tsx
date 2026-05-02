"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CarDetailClient({ car }: { car: any }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const modeParam = searchParams.get("mode")?.toUpperCase() || "RENT";
  
  const [mode, setMode] = useState<"RENT" | "LEASE" | "BUY">(modeParam as any);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);
  const [added, setAdded] = useState(false);

  const calculateUnits = () => {
    if (mode === "BUY") return 1;
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (mode === "LEASE") {
      return Math.ceil(diffDays / 30) > 0 ? Math.ceil(diffDays / 30) : 0;
    }
    return diffDays > 0 ? diffDays : 0;
  };

  const units = calculateUnits();
  
  const unitPrice = mode === "RENT" 
    ? car.pricePerDay 
    : mode === "LEASE" 
    ? car.pricePerDay * 15 
    : car.pricePerDay * 300;

  const totalCost = units * unitPrice;
  const advancePayment = totalCost / 2; // 50% advance

  const handleAddToCart = () => {
    if (totalCost === 0) return;
    setIsProcessing(true);
    addToCart({
      carId: car.id,
      carName: car.model,
      carBrand: car.brand,
      carImage: car.image,
      mode,
      startDate: mode === "BUY" ? new Date().toISOString() : startDate,
      endDate: mode === "BUY" ? new Date().toISOString() : endDate,
      totalCost,
      advance: advancePayment,
    });
    setAdded(true);
    setTimeout(() => {
      setIsProcessing(false);
      setAdded(false);
      router.push("/cart");
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => router.push("/fleet")}
        className="text-white/60 hover:text-white font-bold tracking-widest text-sm uppercase mb-12 flex items-center gap-2 transition-colors"
      >
        ← Back to Fleet
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Col: Images & Damage Report */}
        <div className="space-y-12">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <Image 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-border flex items-center gap-2">
              ⭐ {car.rating} Rating
            </div>
          </div>

          {/* Damage Report Viewer */}
          <div className="bg-surface rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Digital Damage Report
            </h3>
            {car.damageReports && car.damageReports.length > 0 ? (
              <div className="space-y-4">
                {car.damageReports.map((report: any) => (
                  <div key={report.id} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <p className="text-white/80">{report.description}</p>
                    <span className="text-xs font-bold tracking-widest text-white/40 uppercase">
                      {new Date(report.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center">
                <p className="text-white/60 font-medium tracking-wide">Pristine Condition. No damage reported.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Details & Estimator */}
        <div>
          <div className="mb-12">
            <h4 className="text-accent font-bold tracking-widest uppercase mb-2">{car.brand}</h4>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{car.model}</h1>
            <p className="text-white/60 text-lg leading-relaxed">{car.description || "Experience the pinnacle of automotive engineering."}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Year</p>
              <p className="text-2xl font-bold">{car.year}</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Mileage</p>
              <p className="text-2xl font-bold">{car.kilometers.toLocaleString()} km</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Terrain</p>
              <p className="text-2xl font-bold">{car.terrain}</p>
            </div>
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Passengers</p>
              <p className="text-2xl font-bold">{car.passengers}</p>
            </div>
          </div>

          {/* Cost Estimator */}
          <div className="bg-gradient-to-br from-surface to-background p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(99,102,241,0.05)_0%,_transparent_60%)] pointer-events-none" />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-2xl font-black tracking-tight">Configuration</h3>
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                <button onClick={() => setMode("RENT")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${mode === "RENT" ? "bg-accent text-white" : "text-white/40"}`}>RENT</button>
                <button onClick={() => setMode("LEASE")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${mode === "LEASE" ? "bg-accent text-white" : "text-white/40"}`}>LEASE</button>
                <button onClick={() => setMode("BUY")} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${mode === "BUY" ? "bg-accent text-white" : "text-white/40"}`}>BUY</button>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              {mode !== "BUY" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Start Date</label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">End Date</label>
                    <input 
                      type="date" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <p className="text-white/60 mb-1">
                    {mode === "BUY" ? "Full Price" : `Total for ${units} ${mode === "RENT" ? "days" : "months"}`}
                  </p>
                  <p className="text-4xl font-black">${totalCost.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-accent font-bold text-sm tracking-widest uppercase">Advance: ${(totalCost / 2).toLocaleString()}</p>
                  <p className="text-white/40 text-xs mt-1">50% required to reserve</p>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={totalCost === 0 || isProcessing || added}
                className={`btn-premium-glow w-full py-5 mt-4 text-lg tracking-wide disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2 ${added ? '!bg-green-500 !text-white !border-green-400' : ''}`}
              >
                {isProcessing && !added ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ADDING TO CART...
                  </>
                ) : added ? (
                  "ADDED TO CART ✓"
                ) : (
                  "ADD TO CART"
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
