import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Appointment Request Sent!", description: "We'll contact you shortly to confirm." });
    setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
  };

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  return (
    <div>
      <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Contact & Booking</h1>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-display font-bold mb-6">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name *" value={form.name} onChange={e => update("name", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" required maxLength={100} />
                  <input type="tel" placeholder="Phone *" value={form.phone} onChange={e => update("phone", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" required maxLength={15} />
                </div>
                <input type="email" placeholder="Email" value={form.email} onChange={e => update("email", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" maxLength={255} />
                <select value={form.service} onChange={e => update("service", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select Service</option>
                  <option>Hair Styling</option>
                  <option>Hair Coloring</option>
                  <option>Hair Spa</option>
                  <option>Bridal & Party Makeup</option>
                  <option>Skin Care</option>
                  <option>Grooming</option>
                  <option>Facials</option>
                  <option>Manicure & Pedicure</option>
                </select>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="date" value={form.date} onChange={e => update("date", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="time" value={form.time} onChange={e => update("time", e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <textarea placeholder="Additional message..." value={form.message} onChange={e => update("message", e.target.value)} rows={4} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" maxLength={1000} />
                <button type="submit" className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground hover:opacity-90 transition-colors flex items-center justify-center gap-2">
                  <Send size={16} /> Send Booking Request
                </button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Contact Details</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <p className="text-muted-foreground text-sm">Second Floor, Gayatri Enclave, Plot No. 16 South, Gandipet Main Rd, behind ICICI Bank, Kokapet, Narsingi, Hyderabad, Telangana 500075</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="text-primary shrink-0" size={20} />
                    <a href="tel:09606967920" className="text-muted-foreground text-sm hover:text-primary">096069 67920</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="text-primary shrink-0" size={20} />
                    <div className="text-sm text-muted-foreground">
                      <p>Mon, Wed–Sun: 10am–8pm</p>
                      <p>Tuesday: <span className="text-accent font-bold">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1508710860035!2d78.33353787493468!3d17.38561258350127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9514b5c99fed%3A0xa41d947028966395!2sSalon%20Perimeter%20Kokapet!5e1!3m2!1sen!2sin!4v1772628224466!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Perimeter Kokapet Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
