import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Crown, Gift } from "lucide-react";

const services = [
  { name: "Haircut", price: "₹599" },
  { name: "Haircut + Hair Spa", price: "₹799" },
  { name: "Head Massage", price: "₹399" },
  { name: "Smoothening", price: "₹3,499" },
  { name: "Keratin Treatment", price: "₹3,499" },
  { name: "Botosmooth", price: "₹3,999" },
  { name: "Nanoplastia", price: "₹3,999" },
  { name: "Head Toe Package", price: "₹1,999" },
  { name: "Hydra Facial", price: "₹2,300" },
  { name: "Korean Glass Facial", price: "₹1,999" },
  { name: "Haircut + Hair Spa (incl. Hair Wash & Straight Blowdry)", price: "₹799" },
];

const packages = [
  {
    name: "Glow Starter",
    price: "₹799",
    items: ["Fruit Cleanup", "Face Detan", "Aloe Vera Waxing (Full Arms + Under Arms + Half Legs)", "Threading (Eyebrows + Upper Lip)"],
    icon: Sparkles,
  },
  {
    name: "Radiance Combo",
    price: "₹1,199",
    items: ["Saffron Glow Facial", "Face Detan", "Chocolate Pedicure", "Manicure"],
    icon: Crown,
  },
  {
    name: "Pamper Package",
    price: "₹1,199",
    items: ["Saffron Glow Facial", "Threading (Eyebrows + Upper Lip)", "Face Detan", "Aloe Vera Waxing (Full Arms + Under Arms + Half Legs)"],
    icon: Gift,
  },
  {
    name: "Spa & Glow",
    price: "₹1,199",
    items: ["Saffron Glow Facial", "Argan Oil Hair Spa"],
    icon: Sparkles,
  },
  {
    name: "Diamond Lite",
    price: "₹1,499",
    items: ["Diamond Glow / Gold Facial", "Face Detan", "Threading (Eyebrows + Upper Lip)", "Aloe Vera Waxing (Full Arms + Under Arms + Half Legs)", "Chocolate Pedicure", "Manicure"],
    icon: Crown,
  },
  {
    name: "Diamond Premium",
    price: "₹1,999",
    items: ["Diamond Glow / Gold Facial", "Face Detan", "Threading (Eyebrows + Upper Lip)", "Aloe Vera Waxing (Full Arms + Under Arms + Half Legs)", "Chocolate Pedicure", "Manicure", "Keratin Spa", "Haircut"],
    icon: Gift,
  },
];

const Pricing = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Transparent Pricing</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Our Pricing</h1>
        <p className="text-cream/70 mt-4 max-w-xl mx-auto">Premium services at competitive prices. Quality you can trust.</p>
      </motion.div>
    </section>

    {/* Individual Services */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Scissors className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Our <span className="text-gradient-gold">Services</span></h2>
          <p className="text-muted-foreground mt-3">Individual treatments & services</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center justify-between py-4 ${i < services.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="font-body font-medium text-foreground">{s.name}</span>
              <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30" />
              <span className="font-display font-bold text-primary text-lg">{s.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Value <span className="text-gradient-gold">Packages</span></h2>
          <p className="text-muted-foreground mt-3">Combo deals for the best value</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:gold-glow transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <pkg.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{pkg.name}</h3>
                  <span className="text-primary font-display font-bold text-2xl">{pkg.price}</span>
                </div>
              </div>
              <ul className="space-y-2 flex-1">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 block text-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:opacity-90 transition-colors text-sm"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-charcoal text-cream text-center">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to <span className="text-gradient-gold">Book</span>?</h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">Contact us to schedule your appointment or ask about custom packages.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground hover:opacity-90 transition-colors text-lg">
              Book Appointment
            </Link>
            <a href="tel:09606967920" className="rounded-full border-2 border-cream px-10 py-4 font-bold text-cream hover:bg-cream/10 transition-colors text-lg">
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Pricing;
