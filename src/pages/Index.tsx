import Navbar from "@/components/Navbar";
import TextClipHero from "@/components/TextClipHero";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <TextClipHero />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
