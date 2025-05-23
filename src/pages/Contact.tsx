
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold text-blue-600">Pure Sight</h1>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Skontaktuj się z nami
            </h1>
            <p className="text-lg text-gray-600">
              Zainteresowany zakupem Pure Sight? Wypełnij formularz poniżej, a skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-lg font-medium text-gray-700">
                  Adres email *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 h-12 text-lg"
                  placeholder="twoj@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-medium text-gray-700">
                  Numer telefonu *
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2 h-12 text-lg"
                  placeholder="+48 123 456 789"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-lg font-medium text-gray-700">
                  Wiadomość
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-[120px] text-lg"
                  placeholder="Napisz swoją wiadomość tutaj..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12"
              >
                Wyślij zapytanie
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Inne sposoby kontaktu
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Email: kontakt@puresight.pl</p>
              <p>Telefon: +48 123 456 789</p>
              <p>Czas odpowiedzi: do 24 godzin</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
