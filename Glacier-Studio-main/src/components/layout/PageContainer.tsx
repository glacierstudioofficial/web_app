import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  /** Set to false for pages where the first section handles its own top spacing (e.g. full-screen hero) */
  withHero?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  withHero = true,
}) => {
  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col">
      <Navbar />
      {/* On pages WITHOUT a full-screen hero, push content below the fixed nav */}
      {!withHero && <div suppressHydrationWarning className="h-20" aria-hidden />}
      <main suppressHydrationWarning className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
