import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Not another ad agency.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a new kind of film studio. AI-native. Strategy-led. Built for brands who 
            don't want to sound like everyone else.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
