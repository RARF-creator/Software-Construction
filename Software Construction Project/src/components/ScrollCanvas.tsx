"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollCanvasProps {
  scrollProgress: MotionValue<number>;
  numFrames: number;
}

export default function ScrollCanvas({ scrollProgress, numFrames }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const currentFrame = useRef(0);

  
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < numFrames; i++) {
        const img = new Image();
        
        const src = `/frames/frame_${i}.jpg`;
        img.src = src;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve(null);
          };
          img.onerror = () => {
            
            
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve(null);
          };
        });
        loadedImages.push(img);
      }
      imagesRef.current = loadedImages;
      
      
      if (canvasRef.current) {
        resizeCanvas();
      }
    };

    preloadImages();
    
  }, [numFrames]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (img.width === 0 || img.height === 0) return; 

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
    const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
  };

  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrame.current);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
    
  }, []);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    
    const frameIndex = Math.min(
      numFrames - 1,
      Math.max(0, Math.floor(latest * numFrames))
    );
    currentFrame.current = frameIndex;
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
}

