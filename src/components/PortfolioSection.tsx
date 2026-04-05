import { motion } from "framer-motion";

const projects = [
  {
    year: "2025",
    client: "State Bank of India",
    description: "AI-driven short film celebrating the 70th anniversary of State Bank of India, blending historical legacy with a modern digital vision.",
    type: "AI Short Film",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    year: "2025",
    client: "Lenovo X Intel",
    description: "Smarter AI for you — AI Short Film",
    type: "AI Short Film",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    year: "2025",
    client: "Godrej Properties",
    description: "AI Launch Trailer",
    type: "AI Short Film",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    year: "2025",
    client: "SFMG",
    description: "Mother's Day — AI Short Film",
    type: "AI Short Film",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">A Curated Showcase</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Each film is more than a project — it's a story and a leap into the future of creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-primary font-medium">{project.year}</span>
                  <span className="text-xs text-muted-foreground">/ {project.type}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.client}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
