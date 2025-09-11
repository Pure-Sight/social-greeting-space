
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [
    {
      src: "/lovable-uploads/fcd68704-79e6-4e62-b5bf-1756c32ef9d9.png",
      alt: "Pure Sight - stacja czyszcząca do okularów i wyświetlaczy telefonów"
    },
    {
      src: "/lovable-uploads/fa7ff6ac-7d85-4aa1-8c4a-02b6a2f06369.png",
      alt: "Czyszczenie ekranu telefonu chusteczką"
    },
    {
      src: "/lovable-uploads/31afeaa8-e959-420d-8372-19ba3e5e5cf3.png",
      alt: "Korzystanie ze stacji czyszczącej"
    },
    {
      src: "/lovable-uploads/6339cd6a-e202-4d69-ad59-bfdfae3475e2.png",
      alt: "Pobieranie chusteczki ze stacji"
    }
  ];
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
