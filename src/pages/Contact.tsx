import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });

  const validateEmail = (email: string) => {
    // RFC 5322 compliant regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Accept Polish phone numbers with or without country code
    // Formats: +48 123 456 789, 123-456-789, 123456789, etc.
    const phoneRegex = /^(\+48\s?)?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      email: "",
      phone: ""
    });
    
    let isValid = true;
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Proszę wprowadzić prawidłowy adres email" }));
      isValid = false;
    }
    
    // Validate phone
    if (!validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: "Proszę wprowadzić prawidłowy numer telefonu (np. 123 456 789)" }));
      isValid = false;
    }
    
    if (isValid) {
      console.log("Form submitted:", formData);
      // Handle form submission here
      toast({
        title: "Formularz wysłany!",
        description: "Dziękujemy za kontakt. Odezwiemy się wkrótce.",
      });
      
      // Reset form after successful submission
      setFormData({
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (name === 'email' || name === 'phone') {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                  className={`mt-2 h-12 text-lg ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="twoj@email.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
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
                  className={`mt-2 h-12 text-lg ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="+48 123 456 789"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
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
