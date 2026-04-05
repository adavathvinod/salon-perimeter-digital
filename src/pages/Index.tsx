import Navbar from "@/components/Navbar";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
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
      <IntroAnimation />
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
