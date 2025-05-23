import { Button } from "@/components/ui/button";
import { Glasses, CircleCheck, Settings, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "@/components/ImageSlider";
import TestimonialSection from "@/components/TestimonialSection";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Pure Sight
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-blue-600">
                Profesjonalna stacja czyszcząca do okularów
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Rewolucyjny sposób na czyszczenie okularów. Usuwa zabrudzenia, odciski palców i bakterie w kilka sekund.
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
                  alt="OptyClear - stacja czyszcząca do okularów"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Dlaczego OptyClear?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Glasses className="h-8 w-8 text-blue-600" />}
              title="Krystalicznie czyste"
              description="Usuwa wszystkie zabrudzenia, tłuszcz i odciski palców w kilka sekund"
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Bezpieczna formuła"
              description="Delikatna dla wszystkich typów szkieł i powłok antyrefleksyjnych"
            />
            <FeatureCard
              icon={<CircleCheck className="h-8 w-8 text-blue-600" />}
              title="Antybakteryjne działanie"
              description="Eliminuje 99,9% bakterii i zarazków z powierzchni okularów"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Jak to działa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Umieść okulary</h3>
              <p className="text-gray-600">
                Umieść okulary w stacji czyszczącej OptyClear
              </p>
            </div>
            <div className="p-6">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Naciśnij przycisk</h3>
              <p className="text-gray-600">
                Uruchom proces czyszczenia jednym przyciskiem
              </p>
            </div>
            <div className="p-6">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gotowe!</h3>
              <p className="text-gray-600">
                Po 30 sekundach Twoje okulary są idealnie czyste
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Zobacz OptyClear w akcji
          </h2>
          <ImageSlider />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Korzyści
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Oszczędność czasu - czyszczenie w kilka sekund</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Bezpieczne dla wszystkich typów szkieł i oprawek</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Eliminuje 99,9% bakterii i zarazków</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Delikatne dla powłok antyrefleksyjnych</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Kompaktowa konstrukcja - idealna do domu i biura</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Ekonomiczny w użyciu - jeden wkład wystarcza na 200 czyszczeń</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Co mówią nasi klienci?
          </h2>
          <TestimonialSection />
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OptyClear</h3>
              <p className="text-gray-400">
                Profesjonalna stacja czyszcząca do okularów
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <p className="text-gray-400">
                Email: kontakt@optyclear.pl<br />
                Telefon: +48 123 456 789
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Informacje</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">O nas</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Polityka prywatności</a></li>
                <li><a href="#" className="hover:text-white">Regulamin</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 OptyClear. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
