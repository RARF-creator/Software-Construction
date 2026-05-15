"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollytellingBeatsProps {
  scrollProgress: MotionValue<number>;
}

export default function ScrollytellingBeats({ scrollProgress }: ScrollytellingBeatsProps) {
  
  const opacityA = useTransform(scrollProgress, [0, 0.02, 0.18, 0.2], [0, 1, 1, 0]);
  const yA = useTransform(scrollProgress, [0, 0.02, 0.18, 0.2], [20, 0, 0, -20]);

  
  const opacityB = useTransform(scrollProgress, [0.25, 0.27, 0.43, 0.45], [0, 1, 1, 0]);
  const yB = useTransform(scrollProgress, [0.25, 0.27, 0.43, 0.45], [20, 0, 0, -20]);

  
  const opacityC = useTransform(scrollProgress, [0.5, 0.525, 0.725, 0.75], [0, 1, 1, 0]);
  const yC = useTransform(scrollProgress, [0.5, 0.525, 0.725, 0.75], [20, 0, 0, -20]);

  
  const opacityD = useTransform(scrollProgress, [0.8, 0.82, 1.0, 1.0], [0, 1, 1, 1]); 
  const yD = useTransform(scrollProgress, [0.8, 0.82, 1.0, 1.0], [20, 0, 0, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {}
      <motion.div 
        style={{ opacity: opacityA, y: yA }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
          ULTIMATE FREEDOM.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-white drop-shadow-md font-medium max-w-2xl tracking-wide">
          Rent, Lease, or Buy your next journey in seconds.
        </p>
      </motion.div>

      {}
      <motion.div 
        style={{ opacity: opacityB, y: yB }}
        className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl max-w-4xl leading-tight">
          INTELLIGENT<br/>TRIP MODE.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-white drop-shadow-md font-medium max-w-lg tracking-wide">
          Vehicles recommended based on passengers, terrain, and distance.
        </p>
      </motion.div>

      {}
      <motion.div 
        style={{ opacity: opacityC, y: yC }}
        className="absolute inset-0 flex flex-col justify-center items-end text-right px-8 md:px-24"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl max-w-4xl leading-tight">
          TOTAL<br/>TRANSPARENCY.
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-white drop-shadow-md font-medium max-w-lg tracking-wide">
          Explore complete vehicle condition history and digital damage reports.
        </p>
      </motion.div>

      {}
      <motion.div 
        style={{ opacity: opacityD, y: yD }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-32 px-6"
      >
      </motion.div>

    </div>
  );
}

