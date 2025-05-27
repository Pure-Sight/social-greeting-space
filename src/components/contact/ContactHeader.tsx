
import { Link } from "react-router-dom";

const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;
