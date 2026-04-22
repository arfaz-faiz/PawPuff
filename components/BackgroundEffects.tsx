"use client";

import React from "react";
import { PawPrint } from "lucide-react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = React.useState(false);
  const [paws, setPaws] = React.useState<any[]>([]);

  React.useEffect(() => {
    setMounted(true);
    // Reduced to 3 paws for better performance
    setPaws(Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      x: 20 + i * 30, // Spread evenly
      size: 24 + i * 8,
      duration: 12 + i * 4,
      delay: i * 2
    })));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-lime animate-float-up"
          style={{
            left: `${paw.x}%`,
            animationDuration: `${paw.duration}s`,
            animationDelay: `${paw.delay}s`,
            willChange: 'transform',
          }}
        >
          <PawPrint size={paw.size} strokeWidth={1} />
        </div>
      ))}
    </div>
  );
}
