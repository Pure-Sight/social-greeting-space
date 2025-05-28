
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Gotowy na krystalicznie czyste okulary i ekrany?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Zamów Pure Sight już dziś i ciesz się idealnie czystymi okularami i wyświetlaczami telefonów każdego dnia. Idealne do biura, restauracji i miejsc użyteczności publicznej. 30-dniowa gwarancja zwrotu pieniędzy.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Zamów teraz
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
