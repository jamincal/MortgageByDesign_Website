import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LicensingSection from "@/components/sections/LicensingSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LicensingSection />
      <ReviewsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
