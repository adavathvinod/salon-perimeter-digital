import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ArrowRight, Scissors, Sparkles, Heart } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import salonInterior1 from "@/assets/salon-interior-1.png";
import salonInterior2 from "@/assets/salon-interior-2.png";
import salonInterior3 from "@/assets/salon-interior-3.png";
import serviceHairstyling from "@/assets/service-hairstyling.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceFacial from "@/assets/service-facial.jpg";

const slides = [
  { img: hero1, title: "Experience Luxury Hair & Beauty Care", desc: "Transform your look with our expert stylists and premium treatments at Kokapet's finest salon." },
  { img: hero2, title: "Unmatched Style. Unforgettable Confidence", desc: "From bridal makeovers to trendy haircuts, we craft looks that leave lasting impressions." },
  { img: hero3, title: "Kokapet's Premium Salon Destination", desc: "Step into a world of elegance, relaxation, and professional beauty care." },
];

const servicePreview = [
  { icon: Scissors, title: "Hair Styling", desc: "Trendy cuts, blowouts & styling" },
  { icon: Sparkles, title: "Bridal Makeup", desc: "Stunning bridal & party looks" },
  { icon: Heart, title: "Skin Care", desc: "Facials, cleanup & glow treatments" },
];

const reviews = [
  { name: "Sivani M.", text: "The service was great and they stayed late to finish our services.", rating: 5 },
  { name: "Sthuti G.", text: "Loved this place.. Good staff and also great work!!", rating: 5 },
  { name: "Manohar M.", text: "The atmosphere was relaxing and clean, and I loved the attention to detail.", rating: 5 },
];

const Index = () => {
  const [slide, setSlide] = useState(0);

  const next = useCallback(() => setSlide((s) => (s + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-charcoal/50" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-cream mb-4 leading-tight">
                {slides[slide].title}
              </h1>
              <p className="text-lg text-cream/80 mb-8 font-body">{slides[slide].desc}</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground hover:opacity-90 transition-colors">
                  Book Appointment
                </Link>
                <Link to="/about" className="rounded-full border-2 border-cream px-8 py-3 font-bold text-cream hover:bg-cream/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Arrows */}
        <button onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${i === slide ? "bg-primary" : "bg-cream/40"}`} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Welcome to</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Salon Perimeter <span className="text-gradient-gold">Kokapet</span></h2>
            <p className="text-muted-foreground leading-relaxed">
              A haven of beauty and relaxation, inviting you to experience unparalleled pampering. As the second branch of the renowned Salon Perimeter, we bring a legacy of excellence to Kokapet.
            </p>
          </motion.div>

          {/* Services Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {servicePreview.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-8 text-center hover:gold-glow transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Gallery</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[salonInterior1, serviceHairstyling, salonInterior2, serviceBridal, salonInterior3, serviceFacial].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl aspect-square">
                <img src={img} alt="Salon gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-primary text-primary" />)}
              <span className="ml-2 text-lg font-bold">4.8</span>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground italic mb-4">"{r.text}"</p>
                <p className="font-bold">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-cream text-center">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to <span className="text-gradient-gold">Transform</span> Your Look?</h2>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">Book your appointment today and experience luxury beauty care at Salon Perimeter Kokapet.</p>
            <Link to="/contact" className="inline-block rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground hover:opacity-90 transition-colors text-lg">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
