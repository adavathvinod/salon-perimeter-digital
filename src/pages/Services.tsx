import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceHairstyling from "@/assets/service-hairstyling.jpg";
import serviceHaircolor from "@/assets/service-haircolor.jpg";
import serviceHairspa from "@/assets/service-hairspa.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";
import serviceGrooming from "@/assets/service-grooming.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceManiPedi from "@/assets/service-mani-pedi.jpg";

const services = [
  { img: serviceHairstyling, title: "Hair Styling", desc: "Trendy haircuts, blowouts, updos, and styling for every occasion. Our expert stylists craft the perfect look for you." },
  { img: serviceHaircolor, title: "Hair Coloring", desc: "Balayage, highlights, global coloring, and creative color transformations using premium products." },
  { img: serviceHairspa, title: "Hair Spa", desc: "Deep conditioning, keratin treatments, and nourishing spa therapies to revitalize your hair." },
  { img: serviceBridal, title: "Bridal & Party Makeup", desc: "Stunning bridal makeovers and party-ready looks that make your special day unforgettable." },
  { img: serviceSkincare, title: "Skin Care", desc: "Customized skincare routines, cleanups, and treatments for radiant, healthy skin." },
  { img: serviceGrooming, title: "Grooming", desc: "Precision grooming services for men including haircuts, beard styling, and more." },
  { img: serviceFacial, title: "Facials", desc: "Gold facials, hydra facials, Korean glass facials, and more for a refreshed glow." },
  { img: serviceManiPedi, title: "Manicure & Pedicure", desc: "Pamper your hands and feet with our luxurious manicure and pedicure treatments." },
];

const Services = () => (
  <div>
    <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">What We Offer</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Our Services</h1>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden group hover:gold-glow transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <Link to="/contact" className="text-primary font-bold text-sm hover:underline">Book Now →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
