"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import ScrollCanvas from "@/components/ScrollCanvas";
import ScrollytellingBeats from "@/components/ScrollytellingBeats";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  
  const NUM_FRAMES = 221;

  return (
    <main className="bg-background min-h-screen">
      {}
      <div ref={containerRef} className="h-[400vh] relative">
        {}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {}
          <ScrollCanvas scrollProgress={smoothProgress} numFrames={NUM_FRAMES} />
          
          {}
          <ScrollytellingBeats scrollProgress={smoothProgress} />
          
          {}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>

      {}
      {}
      <div className="min-h-screen bg-black text-white px-6 py-24 md:px-24 flex flex-col justify-center relative overflow-hidden">
        
        {}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {}
          <div className="mb-16 md:mb-24">
            <h4 className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/40 uppercase mb-4">
              Experience the Future
            </h4>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              DRIVE <br className="hidden md:block"/> WITHOUT LIMITS.
            </h2>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Instant Access</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Skip the paperwork. Unlock and drive premium vehicles instantly using just your smartphone.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Curated Fleet</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                From luxury sedans to rugged SUVs, our AI matches you with the perfect vehicle for any terrain.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Zero Hidden Fees</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Complete transparency. Insurance, maintenance, and roadside assistance are always included.
              </p>
            </div>
          </div>

          {}
          <div className="flex flex-col items-start md:flex-row md:items-center justify-between border-t border-border pt-16">
            <div className="mb-8 md:mb-0">
              <p className="text-3xl md:text-4xl font-light tracking-tight text-white/80">
                Ready to redefine your journey?
              </p>
            </div>
            <Link href="/fleet">
              <button className="btn-premium-glow px-12 py-5 text-lg tracking-wide">
                Explore Fleet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

