"use client";

import React from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = React.useState(false);
  const [paws, setPaws] = React.useState<any[]>([]);

  React.useEffect(() => {
    setMounted(true);
    setPaws(Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      rotate: Math.random() * 360,
      scale: 0.5 + Math.random(),
      duration: 8 + Math.random() * 5,
      delay: i * 1
    })));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {paws.map((paw) => (
        <motion.div
          key={paw.id}
          initial={{ 
            x: paw.x, 
            y: "110%", 
            rotate: paw.rotate,
            scale: paw.scale 
          }}
          animate={{ 
            y: "-10%",
            x: (parseFloat(paw.x) + (Math.random() * 20 - 10)) + "%",
            rotate: paw.rotate + 360 
          }}
          transition={{ 
            duration: paw.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: paw.delay
          }}
          className="absolute text-lime"
        >
          <PawPrint size={Math.random() * 40 + 20} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
