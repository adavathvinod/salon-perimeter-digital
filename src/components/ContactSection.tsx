import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold">Reach Out!</h2>
            <p className="mt-4 text-muted-foreground">
              Let us help you conquer the AI Ad Film Industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/80 border-border/60 backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/80 border-border/60 backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Contact Number</label>
                <Input
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card/80 border-border/60 backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Company Name</label>
                <Input
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-card/80 border-border/60 backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">How Can We Help?</label>
                <Textarea
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-card/80 border-border/60 backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors glow-primary"
              >
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center gap-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@aeosfilms.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">247 Greene Avenue, Brooklyn, NY 11238, USA</p>
                </div>
              </div>

              <div className="mt-4 p-8 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm">
                <p className="text-lg font-semibold mb-2">
                  Ready to turn your idea into a cinematic AI masterpiece?
                </p>
                <p className="text-sm text-muted-foreground">Let's make it happen!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
