
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                Produkty
              </Link>
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
              Odkryj naszą gamę profesjonalnych produktów do czyszczenia okularów
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {/* Product 1 - Stacja do czyszczenia */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 flex items-center justify-center">
                <img
                  src="/lovable-uploads/fcd68704-79e6-4e62-b5bf-1756c32ef9d9.png"
                  alt="Stacja do czyszczenia"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Stacja do czyszczenia</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Profesjonalna stacja czyszcząca do okularów i ekranów telefonów
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Zamów teraz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product 2 - Płyn do czyszczenia */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 flex items-center justify-center">
                <img
                  src="/lovable-uploads/fcd68704-79e6-4e62-b5bf-1756c32ef9d9.png"
                  alt="Płyn do czyszczenia"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Płyn do czyszczenia</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Specjalny płyn do czyszczenia okularów, bezpieczny dla wszystkich rodzajów soczewek
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Zamów teraz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Product 3 - Chusteczki do czyszczenia */}
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Chusteczki do czyszczenia"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Chusteczki do czyszczenia</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Jednorazowe chusteczki do czyszczenia okularów, idealne do codziennego użytku
              </p>
              <div className="flex justify-center">
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
