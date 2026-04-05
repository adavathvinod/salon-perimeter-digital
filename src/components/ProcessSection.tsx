import { motion } from "framer-motion";
import { Compass, Paintbrush, Handshake, MonitorPlay, Clapperboard, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Concept Development",
    description: "We start with a blank page. Just the problem, and a way through it.",
  },
  {
    icon: Paintbrush,
    title: "AI-Generated Storyboarding",
    description: "AI lets us move faster. So we spend time where it matters.",
  },
  {
    icon: Handshake,
    title: "Creative Partnership",
    description: "We work with you, not just for you.",
  },
  {
    icon: MonitorPlay,
    title: "Production without Production",
    description: "Full cinematic output without traditional production overhead.",
  },
  {
    icon: Clapperboard,
    title: "AI Editing & Post",
    description: "Cut, color, and finish at lightning speed.",
  },
  {
    icon: Sparkles,
    title: "Ta da!!",
    description: "Banger videos for socials, ads, and campaigns.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding relative">
      {/* Bottom red glow like reference */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-primary/5 blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold">How We Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Subtle red glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
