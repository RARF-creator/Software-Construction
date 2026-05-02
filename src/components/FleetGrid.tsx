"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function CarCard({ car, index }: { car: any, index: number }) {
  const [mode, setMode] = useState<"RENT" | "LEASE" | "BUY">("RENT");

  const displayPrice = mode === "RENT" 
    ? car.pricePerDay 
    : mode === "LEASE" 
    ? car.pricePerDay * 15 
    : car.pricePerDay * 300;
  
  const displayUnit = mode === "RENT" ? "/ day" : mode === "LEASE" ? "/ month" : "flat";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-white/20 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={car.image} 
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-border flex items-center gap-1">
          ⭐ {car.rating}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight">{car.brand} {car.model}</h2>
            <p className="text-white/40 text-sm mt-1">{car.year} • {car.kilometers ? car.kilometers.toLocaleString() : 0} km • {car.type || 'Sedan'}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">${displayPrice.toLocaleString()}</p>
            <p className="text-white/40 text-xs uppercase tracking-wider">{displayUnit}</p>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-6" />

        {/* Purchase/Rent Toggles */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button onClick={() => setMode("RENT")} className={`py-2 rounded-lg text-xs font-semibold tracking-wider transition-all active:scale-95 ${mode === "RENT" ? "bg-accent text-white" : "bg-white/5 hover:bg-white/10"}`}>RENT</button>
          <button onClick={() => setMode("LEASE")} className={`py-2 rounded-lg text-xs font-semibold tracking-wider transition-all active:scale-95 ${mode === "LEASE" ? "bg-accent text-white" : "bg-white/5 hover:bg-white/10"}`}>LEASE</button>
          <button onClick={() => setMode("BUY")} className={`py-2 rounded-lg text-xs font-semibold tracking-wider transition-all active:scale-95 ${mode === "BUY" ? "bg-accent text-white" : "bg-white/5 hover:bg-white/10"}`}>BUY</button>
        </div>

        <Link href={`/fleet/${car.id}?mode=${mode.toLowerCase()}`} className="block w-full">
          <button className="btn-premium-glow w-full py-4 tracking-wide">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function FleetGrid({ initialCars }: { initialCars: any[] }) {
  const [filter, setFilter] = useState("All");
  
  const filteredCars = filter === "All" ? initialCars : initialCars.filter(c => c.terrain === filter);

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h4 className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/40 uppercase mb-4">
            Explore Our Fleet
          </h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
            CHOOSE YOUR <br /> WEAPON.
          </h1>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 md:space-x-4 bg-white/5 p-2 rounded-full border border-border backdrop-blur-md self-start md:self-auto">
          {["All", "City", "Highway", "Offroad"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all active:scale-95 ${
                filter === cat ? "bg-white text-background shadow-lg" : "text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </>
  );
}
