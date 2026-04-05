import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">
          AI-First Film Studio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
          <span className="text-gradient">Next‑Gen Films</span>
          <br />
          <span className="text-muted-foreground">for Next‑Gen Brands.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          No cameras. No crews. Just bold ideas turned into ad films — made with AI, 
          at a fraction of the cost.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors glow-primary"
          >
            Let's Chat
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
          >
            See Our Work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
