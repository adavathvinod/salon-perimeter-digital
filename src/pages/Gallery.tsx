import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import salonInterior1 from "@/assets/salon-interior-1.png";
import salonInterior2 from "@/assets/salon-interior-2.png";
import salonInterior3 from "@/assets/salon-interior-3.png";
import salonInterior4 from "@/assets/salon-interior-4.png";
import salonInterior5 from "@/assets/salon-interior-5.png";
import galleryHighlights from "@/assets/gallery-highlights.png";
import galleryFoilyage from "@/assets/gallery-foilyage.png";
import galleryHair from "@/assets/gallery-hair.png";
import serviceHairstyling from "@/assets/service-hairstyling.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceManiPedi from "@/assets/service-mani-pedi.jpg";

const images = [
  { src: salonInterior1, alt: "Salon interior", cat: "Interior" },
  { src: galleryHighlights, alt: "Global highlights", cat: "Hair Color" },
  { src: salonInterior5, alt: "Salon wide view", cat: "Interior" },
  { src: galleryFoilyage, alt: "Cherry red foilyage", cat: "Hair Color" },
  { src: salonInterior2, alt: "Pedicure lounge", cat: "Interior" },
  { src: galleryHair, alt: "Hair styling result", cat: "Hair Style" },
  { src: salonInterior4, alt: "Reception area", cat: "Interior" },
  { src: serviceHairstyling, alt: "Hair styling", cat: "Hair Style" },
  { src: serviceBridal, alt: "Bridal makeup", cat: "Makeup" },
  { src: salonInterior3, alt: "Salon seating", cat: "Interior" },
  { src: serviceFacial, alt: "Gold facial", cat: "Skin Care" },
  { src: serviceManiPedi, alt: "Manicure", cat: "Nail Care" },
];

const categories = ["All", ...Array.from(new Set(images.map(i => i.cat)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter(i => i.cat === filter);

  return (
    <div>
      <section className="relative h-[40vh] min-h-[350px] bg-charcoal flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Work</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-cream">Gallery</h1>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-cream" onClick={() => setLightbox(null)} aria-label="Close">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
