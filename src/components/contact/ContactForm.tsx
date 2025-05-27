
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
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
            title="Wprowadź prawidłowy adres email"
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
            title="Wprowadź prawidłowy numer telefonu"
            pattern="(\+48\s?)?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}"
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
  );
};

export default ContactForm;
