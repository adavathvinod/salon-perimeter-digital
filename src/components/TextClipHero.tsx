import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroClipBg from "@/assets/hero-clip-bg.jpg";

export default function TextClipHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Faint background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroClipBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Large text with image clipped inside */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background text (outline only) */}
          <h1
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter text-center select-none"
            style={{
              WebkitTextStroke: "1px hsl(var(--muted))",
              color: "transparent",
            }}
          >
            SALON
            <br />
            PERIMETER
          </h1>

          {/* Foreground text with image clipped inside */}
          <h1
            className="absolute inset-0 text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter text-center select-none"
            style={{
              backgroundImage: `url(${heroClipBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SALON
            <br />
            PERIMETER
          </h1>
        </motion.div>

        {/* Subtitle & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium">
            Premium Salon Experience
          </p>
          <p className="text-muted-foreground text-center max-w-xl text-sm md:text-base leading-relaxed">
            Where luxury meets artistry. Experience world-class hair styling,
            beauty treatments, and grooming at Kokapet's finest salon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors glow-primary"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
