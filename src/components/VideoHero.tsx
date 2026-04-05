import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_URL = "https://videos.pexels.com/video-files/6724687/6724687-uhd_2560_1440_30fps.mp4";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Large text with video fill (text-clip) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <h1
            className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-none tracking-tighter text-center uppercase select-none"
            style={{
              backgroundImage: `url(${VIDEO_URL.replace('.mp4', '')})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {/* We use a canvas-like approach: the video plays behind a cut-out text */}
          </h1>

          {/* SVG text mask approach for video-in-text effect */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="textMask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="38%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="220"
                  fontWeight="900"
                  fontFamily="Inter, system-ui, sans-serif"
                  letterSpacing="-8"
                >
                  SALON
                </text>
                <text
                  x="50%"
                  y="68%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="160"
                  fontWeight="900"
                  fontFamily="Inter, system-ui, sans-serif"
                  letterSpacing="-4"
                >
                  PERIMETER
                </text>
              </mask>
            </defs>
            {/* This rect blocks the video EXCEPT where text is */}
            <rect
              width="100%"
              height="100%"
              fill="hsl(0 0% 4% / 0.85)"
              mask="url(#textMask)"
            />
          </svg>
        </motion.div>
      </div>

      {/* White overlay text on top - animated */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-primary-foreground font-medium mb-4"
        >
          Premium Salon Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight px-4"
        >
          Where Style
          <br />
          <span className="text-primary">Meets Elegance</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 text-sm md:text-base text-primary-foreground/70 max-w-md text-center px-4"
        >
          Kokapet's most premium salon destination
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 flex gap-4 pointer-events-auto"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
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
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
