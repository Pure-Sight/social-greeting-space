
const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Jak to działa?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Zwilż chusteczkę płynem</h3>
            <p className="text-gray-600">
              Umieść chusteczkę pod dyszą - stacja automatycznie nawilży ją płynem czyszczącym
            </p>
          </div>
          <div className="p-6">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Wytrzyj okulary lub ekran</h3>
            <p className="text-gray-600">
              Usuń zabrudzenia, tłuszcz i odciski palców
            </p>
          </div>
          <div className="p-6">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Gotowe!</h3>
            <p className="text-gray-600">
              Ciesz się czystymi okularami bądź ekranem w kilka sekund
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
