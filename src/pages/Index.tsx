import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Solutions from "@/components/Solutions";
import MetricsPreview from "@/components/MetricsPreview";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Solutions />
      <MetricsPreview />
      <Benefits />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
