
import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeader />

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Skontaktuj się z nami
            </h1>
            <p className="text-lg text-gray-600">
              Zainteresowany zakupem? Wypełnij formularz poniżej, a skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>
          </div>

          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
