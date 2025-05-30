
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl font-medium mb-6 text-blue-600">
              Profesjonalna stacja czyszcząca do okularów i wyświetlaczy telefonów
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Rewolucyjny sposób na czyszczenie okularów i ekranów telefonów. Usuwa zabrudzenia, odciski palców i bakterie w kilka sekund. Świetnie sprawdzi się w Twoim biurze, restauracji czy miejscu użyteczności publicznej.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Kup teraz
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Dowiedz się więcej
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-xl p-4">
              <img
                src="/placeholder.svg"
                alt="Pure Sight - stacja czyszcząca do okularów i wyświetlaczy telefonów"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
