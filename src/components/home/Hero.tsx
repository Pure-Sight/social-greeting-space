
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { removeBackground, loadImageFromUrl } from "@/lib/background-removal";

const Hero = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processHeroImage = async () => {
      try {
        setIsProcessing(true);
        const imageElement = await loadImageFromUrl('/lovable-uploads/fcd68704-79e6-4e62-b5bf-1756c32ef9d9.png');
        const processedBlob = await removeBackground(imageElement);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Error processing hero image:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    processHeroImage();
  }, []);
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 flex items-center justify-center">
              {isProcessing ? (
                <div className="text-blue-600">Przetwarzanie zdjęcia...</div>
              ) : (
                <img
                  src={processedImageUrl || '/lovable-uploads/fcd68704-79e6-4e62-b5bf-1756c32ef9d9.png'}
                  alt="Pure Sight - stacja czyszcząca do okularów i wyświetlaczy telefonów"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
