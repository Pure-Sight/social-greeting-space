
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const ImageSlider = () => {
  const images = [
    { src: "/placeholder.svg", alt: "Stacja czyszcząca OptyClear" },
    { src: "/placeholder.svg", alt: "Proces czyszczenia" },
    { src: "/placeholder.svg", alt: "Czyste okulary" }
  ];

  return (
    <Carousel className="mx-auto max-w-3xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageSlider;
