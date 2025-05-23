
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import ProductGallery from "@/components/home/ProductGallery";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ProductGallery />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
