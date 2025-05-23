
import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    "Oszczędność czasu - czyszczenie w kilka sekund",
    "Bezpieczne dla wszystkich typów szkieł i oprawek",
    "Eliminuje 99,9% bakterii i zarazków",
    "Delikatne dla powłok antyrefleksyjnych",
    "Kompaktowa konstrukcja - idealna do domu i biura",
    "Ekonomiczny w użyciu - jeden wkład wystarcza na 200 czyszczeń"
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Korzyści
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
