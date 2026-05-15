"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function TripModePage() {
  const [step, setStep] = useState(1);
  const [terrain, setTerrain] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommended, setRecommended] = useState<any[]>([]);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const res = await fetch(`/api/trip-mode?terrain=${terrain}&passengers=${passengers}`);
      const cars = await res.json();
      setRecommended(cars);
    } catch {
      setRecommended([]);
    } finally {
      setIsAnalyzing(false);
      setStep(3);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-trip-start to-trip-end text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(99,102,241,0.05)_0%,_transparent_60%)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-8 border border-accent/30">
              Trip Mode Active
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              LET AI DESIGN <br/>YOUR JOURNEY.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Tell us where you are going and who is coming with you. Our intelligent algorithm will pair you with the ultimate machine for the terrain.
            </p>
            <button 
              onClick={() => setStep(2)}
              className="btn-premium-glow px-12 py-5 text-lg tracking-wide w-full max-w-sm mx-auto block"
            >
              Start Configuration
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-left bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-border shadow-2xl">
            <h2 className="text-3xl font-black tracking-tight mb-8">Mission Parameters</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Select Terrain</label>
                <div className="grid grid-cols-3 gap-4">
                  {["City", "Highway", "Offroad"].map(t => (
                    <button 
                      key={t}
                      onClick={() => setTerrain(t)}
                      className={`py-4 rounded-xl font-semibold transition-all active:scale-95 border ${terrain === t ? "bg-accent border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-white/5 border-border hover:bg-white/10"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Passengers</label>
                <div className="flex items-center space-x-6">
                  <button onClick={() => setPassengers(Math.max(1, passengers - 1))} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all text-2xl font-light">-</button>
                  <span className="text-4xl font-black w-8 text-center">{passengers}</span>
                  <button onClick={() => setPassengers(Math.min(7, passengers + 1))} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all text-2xl font-light">+</button>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleAnalyze}
                disabled={!terrain || isAnalyzing}
                className="btn-premium-glow px-10 py-4 tracking-wide disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-3 min-w-[250px]"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ANALYZING FLEET...
                  </>
                ) : "FIND MY WEAPON"}
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-4xl font-black tracking-tight mb-4">Optimum Matches Found</h2>
            <p className="text-indigo-400 font-medium tracking-wide mb-12">
              Calibrated for {terrain} • {passengers} Passengers • {recommended.length} vehicles matched
            </p>
            
            {recommended.length === 0 ? (
              <div className="bg-white/5 p-12 rounded-3xl border border-border">
                <p className="text-white/40 mb-4">No available vehicles match your criteria right now.</p>
                <button onClick={() => setStep(2)} className="btn-premium-glow px-8 py-3 text-sm">Try Different Parameters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {recommended.map((car, index) => (
                  <div key={car.id} className="bg-white/5 rounded-2xl overflow-hidden border border-border relative group">
                    <div className="absolute top-4 right-4 z-20 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {index === 0 ? "98% MATCH" : index === 1 ? "94% MATCH" : `${90 - index * 2}% MATCH`}
                    </div>
                    <div className="relative h-56 overflow-hidden">
                      <Image src={car.image} alt={car.model} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-black">{car.brand} {car.model}</h3>
                      <p className="text-slate-400 text-sm mt-2">{car.terrain} • ⭐ {car.rating} Rating • {car.passengers} seats</p>
                      <div className="mt-6 flex justify-between items-center">
                        <span className="text-xl font-bold">${car.pricePerDay}<span className="text-sm font-normal text-slate-500">/day</span></span>
                        <Link href={`/fleet/${car.id}`}>
                          <button className="btn-premium-glow px-6 py-2 text-sm">Select</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <button onClick={() => setStep(2)} className="mt-12 text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
              ← Reconfigure Parameters
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
