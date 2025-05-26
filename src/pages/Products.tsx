
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Products = () => {
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
              <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                Pure Sight
              </Link>
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

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Nasze Produkty
            </h1>
            <p className="text-lg text-gray-600">
              Odkryj naszą gamę profesjonalnych stacji czyszczących do okularów
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Pure Sight Basic"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pure Sight Basic</h3>
              <p className="text-gray-600 mb-4">
                Podstawowa stacja czyszcząca idealna do domowego użytku
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">299 zł</span>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Zamów teraz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Pure Sight Pro"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pure Sight Pro</h3>
              <p className="text-gray-600 mb-4">
                Zaawansowana stacja z dodatkowymi funkcjami dla profesjonalistów
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">599 zł</span>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Zamów teraz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Pure Sight Enterprise"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pure Sight Enterprise</h3>
              <p className="text-gray-600 mb-4">
                Przemysłowa stacja czyszcząca dla optyk i laboratoriów
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">999 zł</span>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Zamów teraz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
