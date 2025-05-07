
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Optyk",
    content: "OptyClear to najlepsze urządzenie czyszczące do okularów, jakie kiedykolwiek używałam. Polecam wszystkim moim klientom."
  },
  {
    name: "Piotr Nowak",
    role: "Programista",
    content: "Spędzam cały dzień przed komputerem, a OptyClear pomaga mi utrzymać okulary w idealnej czystości. Niesamowita różnica w komforcie!"
  },
  {
    name: "Marta Wiśniewska",
    role: "Nauczycielka",
    content: "Jako nauczycielka potrzebuję czystych okularów przez cały dzień. OptyClear rozwiązał mój problem raz na zawsze. Polecam!"
  },
  {
    name: "Tomasz Lewandowski",
    role: "Lekarz",
    content: "Higiena okularów jest kluczowa w mojej pracy. OptyClear nie tylko czyści, ale i dezynfekuje - to doskonałe rozwiązanie."
  }
];

const TestimonialSection = () => {
  return (
    <Carousel className="mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="m-2 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8 gap-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default TestimonialSection;
