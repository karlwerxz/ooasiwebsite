import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background text-foreground overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
