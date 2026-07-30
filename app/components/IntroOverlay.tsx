"use client";

import { useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const IntroContext = createContext<{ introDone: boolean }>({ introDone: true });

export function useIntroStatus() {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [introDone, setIntroDone] = useState(() => pathname !== "/");

  return (
    <IntroContext.Provider value={{ introDone }}>
      {children}
      <AnimatePresence>
        {!introDone && pathname === "/" && (
          <motion.div
            className="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="intro-typing">
              <motion.div
                className="intro-typing__reveal"
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                animate={{ clipPath: "polygon(0 0, 110% 0, 110% 100%, 0 100%)" }}
                transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
                onAnimationComplete={() => {
                  setTimeout(() => setIntroDone(true), 500);
                }}
              >
                <span className="intro-typing__text">Soff</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  );
}

// Keep default export for backward compat, but we'll use IntroProvider now
export default function IntroOverlay() {
  return null;
}
