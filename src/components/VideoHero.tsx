import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroVideoBg from "@/assets/hero-video-bg.jpg";

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background image with slow zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src={heroVideoBg}
          alt="Salon Perimeter Interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* SVG text mask - video/image shows THROUGH the text, rest is dark */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="heroTextMask">
              {/* White = visible (dark overlay), Black = hidden (show image) */}
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="35%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                fontSize="200"
                fontWeight="900"
                fontFamily="Inter, system-ui, sans-serif"
                letterSpacing="-6"
              >
                SALON
              </text>
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                fontSize="130"
                fontWeight="900"
                fontFamily="Inter, system-ui, sans-serif"
                letterSpacing="-2"
              >
                PERIMETER
              </text>
            </mask>
          </defs>
          {/* Dark overlay with text cut out - image shows through letters */}
          <motion.rect
            width="100%"
            height="100%"
            fill="hsl(0, 0%, 4%)"
            fillOpacity="0.88"
            mask="url(#heroTextMask)"
            initial={{ fillOpacity: 0 }}
            animate={{ fillOpacity: 0.88 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </svg>
      </div>

      {/* White overlay text on top - animated */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.5em] text-primary-foreground/80 font-medium mb-6"
        >
          Kokapet's Premium Destination
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center leading-tight"
        >
          Premium
          <br />
          <span className="text-primary">Salon Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mt-4 text-xs md:text-sm text-primary-foreground/60 max-w-sm text-center"
        >
          Where bold style meets timeless elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-8 flex gap-4 pointer-events-auto"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors glow-primary"
          >
            Book Now
          </a>
          <a
            href="#work"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
