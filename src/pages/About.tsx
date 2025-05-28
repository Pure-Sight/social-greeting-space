
import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/contact/ContactHeader";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              O nas
            </h1>
            <p className="text-lg text-gray-600">
              Poznaj historię i misję Pure Sight
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nasza misja</h2>
                <p className="text-gray-600 mb-6">
                  Pure Sight to polska firma specjalizująca się w produkcji profesjonalnych stacji czyszczących do okularów. 
                  Naszą misją jest dostarczanie najwyższej jakości rozwiązań, które zapewniają krystalicznie czyste okulary 
                  w każdych warunkach.
                </p>
                <p className="text-gray-600">
                  Wierzymy, że każdy zasługuje na doskonałą jakość widzenia, dlatego nasze produkty są projektowane 
                  z myślą o maksymalnej skuteczności i łatwości użytkowania.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nasze wartości</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Jakość:</strong> Używamy tylko najlepszych materiałów i technologii</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Innowacyjność:</strong> Ciągle rozwijamy nasze produkty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Obsługa klienta:</strong> Zapewniamy pełne wsparcie techniczne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Ekologia:</strong> Dbamy o środowisko naturalne</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Dlaczego Pure Sight?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">10+ lat doświadczenia</h3>
                  <p className="text-gray-600">Na rynku optycznym od 2014 roku</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">1000+ zadowolonych klientów</h3>
                  <p className="text-gray-600">W całej Polsce i Europie</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">24/7 wsparcie</h3>
                  <p className="text-gray-600">Pomoc techniczna przez całą dobę</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
