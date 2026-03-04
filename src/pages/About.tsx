import { motion } from "framer-motion";
import { Award, Users, Heart, Clock } from "lucide-react";
import salonInterior3 from "@/assets/salon-interior-3.png";
import salonInterior4 from "@/assets/salon-interior-4.png";

const whyUs = [
  { icon: Award, title: "Expert Stylists", desc: "Our team brings years of professional experience and continuous training." },
  { icon: Users, title: "Client-Centric", desc: "Every visit is personalized to your unique style and preferences." },
  { icon: Heart, title: "Premium Products", desc: "We exclusively use top-tier products from globally trusted brands." },
  { icon: Clock, title: "Convenient Hours", desc: "Open 6 days a week with flexible timing to suit your schedule." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img src={salonInterior4} alt="Salon Perimeter Kokapet" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">About Us</h1>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Welcome</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">A Legacy of <span className="text-gradient-gold">Excellence</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Salon Perimeter Kokapet, a haven of beauty and relaxation, invites you to experience unparalleled pampering. Strategically nestled behind ICICI Bank on Gandipet Main Road, this exquisite salon offers easy access to a world of hair and beauty transformations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As the second branch of the renowned Salon Perimeter, it brings a legacy of excellence to Kokapet. Our team of skilled professionals is dedicated to enhancing your natural beauty with the latest techniques and premium products.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden">
            <img src={salonInterior3} alt="Salon interior" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10">
          <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">To provide exceptional beauty services that empower our clients with confidence and self-expression, while maintaining the highest standards of hygiene, professionalism, and customer satisfaction.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-10">
          <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">To be Hyderabad's most trusted and loved salon brand, recognized for innovation, artistry, and an unwavering commitment to making every client feel extraordinary.</p>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">The Perimeter Difference</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <w.icon className="text-primary" size={28} />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">{w.title}</h4>
              <p className="text-muted-foreground text-sm">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
