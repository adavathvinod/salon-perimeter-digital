import { motion } from "framer-motion";
import { Film, Clapperboard, Rocket, Music } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "AI Commercials",
    description: "Ad films for TV, YouTube, and beyond using AI — from script to final grade.",
    steps: ["Concept Brief", "Pre-Execution Doc", "AI-Generated Production", "Social & Platform-Ready Edits"],
  },
  {
    icon: Clapperboard,
    title: "AI Short Films",
    description: "Short-form storytelling that connects deeply with audiences and strengthens your brand voice.",
    steps: ["Narrative Development", "AI Character & Scene Creation", "AI Cinematic Production", "Editing & Color Finishing"],
  },
  {
    icon: Rocket,
    title: "AI Launch Trailers",
    description: "High-energy AI-generated trailers designed to build hype for your product, event, or campaign.",
    steps: ["Trailer Script & Concept", "AI Visual & Motion Design", "Dynamic Editing", "Optimized Cuts for Multiple Platforms"],
  },
  {
    icon: Music,
    title: "AI Music Videos",
    description: "Visually stunning music videos with limitless creative freedom, powered entirely by AI.",
    steps: ["Concept & Creative Direction", "AI World & Character Creation", "AI Motion & Performance Visuals", "Final Cut & Platform Optimization"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">What We Create</p>
          <h2 className="text-3xl md:text-5xl font-bold">Full Film Content Using AI</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From scripting and previz to VFX and editing — eliminating restraints to deliver creative excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
