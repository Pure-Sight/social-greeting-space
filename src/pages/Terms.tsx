import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/contact/ContactHeader";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Regulamin
            </h1>
            <p className="text-lg text-gray-600">
              Warunki świadczenia usług Pure Sight
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 1. Postanowienia ogólne</h2>
              <p className="text-gray-600 mb-4">
                Niniejszy Regulamin określa warunki świadczenia usług przez Pure Sight sp. z o.o. 
                z siedzibą w Warszawie, ul. Przykładowa 123, 00-001 Warszawa.
              </p>
              <p className="text-gray-600">
                Regulamin obowiązuje wszystkich Klientów korzystających z usług Pure Sight.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 2. Definicje</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Pure Sight</strong> - Pure Sight sp. z o.o.</li>
                <li><strong>Klient</strong> - osoba fizyczna lub prawna korzystająca z usług</li>
                <li><strong>Produkt</strong> - stacje czyszczące do okularów oferowane przez Pure Sight</li>
                <li><strong>Usługa</strong> - wszelkie usługi świadczone przez Pure Sight</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 3. Warunki sprzedaży</h2>
              <p className="text-gray-600 mb-4">
                Oferta Pure Sight skierowana jest przede wszystkim do klientów biznesowych: 
                salonów optycznych, klinik okulistycznych, biur i innych instytucji.
              </p>
              <div className="space-y-4 text-gray-600">
                <p><strong>3.1.</strong> Ceny produktów podawane są w złotych polskich (PLN) brutto.</p>
                <p><strong>3.2.</strong> Dostępność produktów może ulec zmianie bez wcześniejszego powiadomienia.</p>
                <p><strong>3.3.</strong> Zamówienie uznaje się za złożone po otrzymaniu potwierdzenia od Pure Sight.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 4. Dostawa i płatność</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>4.1.</strong> Dostawa realizowana jest na terenie całej Polski.</p>
                <p><strong>4.2.</strong> Czas dostawy wynosi 3-7 dni roboczych.</p>
                <p><strong>4.3.</strong> Akceptowane formy płatności:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Przelew bankowy</li>
                  <li>Płatność przy odbiorze (za pobraniem)</li>
                  <li>Leasing dla firm</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 5. Gwarancja i reklamacje</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>5.1.</strong> Na wszystkie produkty Pure Sight udziela 24-miesięcznej gwarancji.</p>
                <p><strong>5.2.</strong> Gwarancja obejmuje wady materiałowe i produkcyjne.</p>
                <p><strong>5.3.</strong> Reklamacje należy zgłaszać na adres: reklamacje@puresight.online</p>
                <p><strong>5.4.</strong> Czas rozpatrzenia reklamacji: do 14 dni roboczych.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 6. Wsparcie techniczne</h2>
              <p className="text-gray-600 mb-4">
                Pure Sight zapewnia pełne wsparcie techniczne dla wszystkich produktów:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Instruktaż użytkowania przy dostawie</li>
                <li>Pomoc techniczna telefoniczna: +48 514 696 918</li>
                <li>Okresowe przeglądy i konserwacja</li>
                <li>Szkolenia dla personelu</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 7. Postanowienia końcowe</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>7.1.</strong> Pure Sight zastrzega sobie prawo do zmiany Regulaminu.</p>
                <p><strong>7.2.</strong> Zmiany wchodzą w życie po 14 dniach od publikacji.</p>
                <p><strong>7.3.</strong> W sprawach spornych właściwy jest sąd dla siedziby Pure Sight.</p>
                <p><strong>7.4.</strong> Regulamin wchodzi w życie z dniem 1 stycznia 2025 roku.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Kontakt w sprawach regulaminu</h3>
              <p className="text-gray-600">
                Email: <strong>prawne@puresight.online</strong><br />
                Telefon: <strong>+48 514 696 918</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
