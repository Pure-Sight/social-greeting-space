
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Gotowy na krystalicznie czyste okulary?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Zamów OptyClear już dziś i ciesz się idealnie czystymi okularami każdego dnia. 30-dniowa gwarancja zwrotu pieniędzy.
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
