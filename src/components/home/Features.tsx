
import { Glasses, CircleCheck, Settings } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Dlaczego Pure Sight?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Glasses className="h-8 w-8 text-blue-600" />}
            title="Krystalicznie czyste"
            description="Usuwa wszystkie zabrudzenia, tłuszcz i odciski palców z okularów i ekranów telefonów w kilka sekund"
          />
          <FeatureCard
            icon={<Settings className="h-8 w-8 text-blue-600" />}
            title="Bezpieczna formuła"
            description="Delikatna dla wszystkich typów szkieł, wyświetlaczy i powłok antyrefleksyjnych"
          />
          <FeatureCard
            icon={<CircleCheck className="h-8 w-8 text-blue-600" />}
            title="Antybakteryjne działanie"
            description="Eliminuje 99,9% bakterii i zarazków z powierzchni okularów i ekranów"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
