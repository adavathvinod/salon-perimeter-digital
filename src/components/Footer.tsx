import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-charcoal text-cream">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Salon Perimeter" className="h-12 mb-4" />
          <p className="text-cream-dark text-sm leading-relaxed">
            Kokapet's premium salon destination for luxury hair & beauty care.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://wa.me/919606967920" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="tel:09606967920" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[{to:"/",l:"Home"},{to:"/about",l:"About Us"},{to:"/services",l:"Services"},{to:"/gallery",l:"Gallery"},{to:"/reviews",l:"Reviews"},{to:"/contact",l:"Book Appointment"}].map(x=>(
              <li key={x.to}><Link to={x.to} className="text-cream-dark hover:text-primary transition-colors">{x.l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4 text-gold">Contact</h4>
          <div className="space-y-3 text-sm text-cream-dark">
            <div className="flex gap-2"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /><span>Second Floor, Gayatri Enclave, Plot No. 16 South, Gandipet Main Rd, behind ICICI Bank, Kokapet, Hyderabad 500075</span></div>
            <div className="flex gap-2"><Phone size={16} className="text-primary shrink-0" /><a href="tel:09606967920" className="hover:text-primary">096069 67920</a></div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4 text-gold">Hours</h4>
          <div className="space-y-1 text-sm text-cream-dark">
            <div className="flex justify-between"><span>Mon, Wed–Sun</span><span>10am–8pm</span></div>
            <div className="flex justify-between"><span>Tuesday</span><span className="text-accent">Closed</span></div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-dark">
        <p>© {new Date().getFullYear()} Salon Perimeter Kokapet. All rights reserved.</p>
        <a href="https://g.co/kgs/salon-perimeter" target="_blank" rel="noopener noreferrer" className="hover:text-primary">⭐ Leave a Google Review</a>
      </div>
    </div>
  </footer>
);

export default Footer;
