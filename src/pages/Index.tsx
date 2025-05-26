import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import ProductGallery from "@/components/home/ProductGallery";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h1 className="text-2xl font-bold text-blue-600">Pure Sight</h1>
            </div>
            <nav className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
                  Produkty
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-md">
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">
                      Stacja do czyszczenia
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">
                      Płyn do czyszczenia
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">
                      Chusteczki do czyszczenia
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
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
