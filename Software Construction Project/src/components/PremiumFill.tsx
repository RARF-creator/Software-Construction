"use client";

import { motion } from "framer-motion";

export default function PremiumFill() {
  return (
    <div className="relative w-full overflow-hidden border-t border-white/5 bg-background mt-12 md:mt-24">
      {}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      />

      {}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(99,102,241,0.05)_0%,_transparent_60%)] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_0%,_transparent_60%)] -translate-y-1/2 pointer-events-none" />

      {}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 mx-auto md:mx-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-xl font-bold tracking-wide">Military-Grade Security</h3>
            <p className="text-white/40 text-sm leading-relaxed">Every transaction is fully encrypted and identity-verified for total peace of mind on the road.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 mx-auto md:mx-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold tracking-wide">Instant Telemetry</h3>
            <p className="text-white/40 text-sm leading-relaxed">Live GPS and digital damage reports ensure total transparency before you even touch the steering wheel.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 mx-auto md:mx-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold tracking-wide">White-Glove Delivery</h3>
            <p className="text-white/40 text-sm leading-relaxed">Select premium vehicles can be delivered directly to your driveway or private tarmac.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
