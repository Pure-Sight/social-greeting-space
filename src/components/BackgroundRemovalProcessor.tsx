import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/lib/background-removal';
import { Button } from '@/components/ui/button';

interface BackgroundRemovalProcessorProps {
  imageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

const BackgroundRemovalProcessor = ({ imageUrl, onProcessed }: BackgroundRemovalProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processImage = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      
      console.log('Loading image from URL:', imageUrl);
      const imageElement = await loadImageFromUrl(imageUrl);
      
      console.log('Removing background...');
      const processedBlob = await removeBackground(imageElement);
      
      // Create a URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      onProcessed(processedUrl);
      
    } catch (err) {
      console.error('Error processing image:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Usuń tło ze zdjęcia</h3>
      
      <div className="mb-4">
        <img 
          src={imageUrl} 
          alt="Original" 
          className="max-w-xs h-auto rounded border"
        />
      </div>

      <Button 
        onClick={processImage} 
        disabled={isProcessing}
        className="mb-4"
      >
        {isProcessing ? 'Przetwarzanie...' : 'Usuń tło'}
      </Button>

      {error && (
        <div className="text-red-600 text-sm">
          Błąd: {error}
        </div>
      )}
    </div>
  );
};

export default BackgroundRemovalProcessor;