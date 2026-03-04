import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sivani Mudragada", text: "The service was great and they stayed late to finish our services. I really appreciate their dedication and professionalism.", rating: 5 },
  { name: "Sthuti Gupta", text: "Loved this place.. Good staff and also great work!! They really know how to make you feel pampered.", rating: 5 },
  { name: "Manohar Mandala", text: "The atmosphere was relaxing and clean, and I loved the attention to detail. Will definitely come back!", rating: 5 },
  { name: "Priya S.", text: "Best salon in Kokapet! The bridal package was absolutely worth it. My wedding look was perfect.", rating: 5 },
  { name: "Rajesh K.", text: "Great grooming services for men too. The haircut and beard styling were top-notch.", rating: 5 },
  { name: "Ananya R.", text: "Amazing hair spa experience. My hair has never felt so soft and healthy. Highly recommended!", rating: 5 },
];

const Reviews = () => (
  <div>
    <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Client Love</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Reviews</h1>
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-primary text-primary" />)}
          <span className="ml-3 text-2xl font-bold text-cream">4.8</span>
        </div>
        <p className="text-cream/60 mt-1 text-sm">Based on Google Reviews</p>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 relative hover:gold-glow transition-shadow"
            >
              <Quote size={32} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={16} className="fill-primary text-primary" />)}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {r.name[0]}
                </div>
                <p className="font-bold">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Reviews;
