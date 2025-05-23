
import ImageSlider from "@/components/ImageSlider";

const ProductGallery = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Zobacz OptyClear w akcji
        </h2>
        <ImageSlider />
      </div>
    </section>
  );
};

export default ProductGallery;
