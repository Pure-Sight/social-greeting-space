
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pure Sight</h3>
            <p className="text-gray-400">
              Profesjonalna stacja czyszcząca do okularów i wyświetlaczy telefonów
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              Email: kontakt@puresight.online<br />
              Telefon: +48 123 456 789
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Informacje</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-white">O nas</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Polityka prywatności</a></li>
              <li><a href="/terms" className="hover:text-white">Regulamin</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 Pure Sight. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
