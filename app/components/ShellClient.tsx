"use client";

import type { ReactNode } from "react";
import { IntroProvider } from "@/components/IntroOverlay";

export default function ShellClient({ children }: { children: ReactNode }) {
  return (
    <IntroProvider>
      <div className="site-shell">
        {children}
      </div>
    </IntroProvider>
  );
}
