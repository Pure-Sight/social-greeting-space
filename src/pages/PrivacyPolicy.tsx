import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/contact/ContactHeader";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Polityka Prywatności
            </h1>
            <p className="text-lg text-gray-600">
              Informacje o przetwarzaniu danych osobowych
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Postanowienia ogólne</h2>
              <p className="text-gray-600 mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych przez Pure Sight.
              </p>
              <p className="text-gray-600">
                Administratorem danych osobowych jest Pure Sight sp. z o.o. z siedzibą w Warszawie.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Rodzaj przetwarzanych danych</h2>
              <p className="text-gray-600 mb-4">Przetwarzamy następujące kategorie danych osobowych:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Dane identyfikacyjne (imię, nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                <li>Dane dotyczące firmy (nazwa firmy, NIP)</li>
                <li>Dane dotyczące korespondencji</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Cel przetwarzania danych</h2>
              <p className="text-gray-600 mb-4">Dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Realizacji umów sprzedaży i świadczenia usług</li>
                <li>Obsługi zapytań i reklamacji</li>
                <li>Prowadzenia działań marketingowych (za zgodą)</li>
                <li>Wypełnienia obowiązków prawnych</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Podstawa prawna</h2>
              <p className="text-gray-600 mb-4">Podstawą prawną przetwarzania danych jest:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</li>
                <li>Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)</li>
                <li>Zgoda (art. 6 ust. 1 lit. a RODO)</li>
                <li>Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Okres przechowywania danych</h2>
              <p className="text-gray-600">
                Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
                jednak nie dłużej niż przez okres wynikający z przepisów prawa lub do momentu wycofania zgody.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Prawa użytkowników</h2>
              <p className="text-gray-600 mb-4">Użytkownik ma prawo do:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu</li>
                <li>Cofnięcia zgody</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Kontakt</h2>
              <p className="text-gray-600">
                W sprawach dotyczących ochrony danych osobowych prosimy o kontakt: 
                <strong> kontakt@puresight.online</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
