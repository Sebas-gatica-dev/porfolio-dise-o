"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import signatureAnimation from "../../public/lottie/signature_anim.lottie.json";

type IntroStatus = "show" | "hide";

export default function IntroOverlay() {
  const pathname = usePathname();
  const [status, setStatus] = useState<IntroStatus>(() =>
    pathname === "/" ? "show" : "hide",
  );
  const shouldShowOverlay = status === "show" && pathname === "/";

  const handleComplete = () => {
    setStatus("hide");
  };

  return (
    <AnimatePresence>
      {shouldShowOverlay && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="intro-overlay__signature">
            <Lottie
              animationData={signatureAnimation}
              loop={false}
              onComplete={handleComplete}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
