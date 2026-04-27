import { useEffect, useState } from "react";
// Import funkcji z serwisu
import { getLanguages, getMenu } from "../services/publicService";
// Poprawna ścieżka do Layoutu (zakładając strukturę z Twojego drzewa plików)
import AppLayout from "./components/Layout/AppLayout";

export default function Home() {
  const [langs, setLangs] = useState([]);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(false);

  // Pobieranie dostępnych języków przy starcie strony
  useEffect(() => {
    getLanguages().then((response) => {
      console.log("Pobrane języki:", response);
      if (Array.isArray(response)) {
        setLangs(response);
      } else if (response && response.data) {
        setLangs(response.data);
      } else {
        // Jeśli serwer zwróci błąd/blokadę, ustaw puste pole, by nie wisiało ładowanie
        setLangs([]); 
      }
    }).catch(() => setLangs([]));
  }, []);


  // Funkcja wywoływana po kliknięciu w przycisk języka
  const handleLanguageClick = (langCode) => {
    console.log("Pobieram menu dla:", langCode);
    setLoading(true);
    
    getMenu(langCode).then((menuData) => {
      console.log("Odebrane dane menu:", menuData);
      setMenu(menuData);
      setLoading(false);
    }).catch(err => {
      console.error("Błąd pobierania menu:", err);
      setLoading(false);
    });
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">Wybierz język aplikacji</h1>
        
        {/* Wyświetlanie przycisków języków */}
        <div className="flex gap-4 mb-10">
          {langs.length > 0 ? (
            langs.map((lang) => (
              <button
                key={lang.id || lang.code}
                onClick={() => handleLanguageClick(lang.code)}
                className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors shadow-sm"
              >
                {lang.name} ({lang.code})
              </button>
            ))
          ) : (
            <p>Ładowanie języków...</p>
          )}
        </div>

        <hr className="w-full border-gray-300 mb-10" />

        {/* Sekcja wyświetlania menu */}
        <div className="w-full max-w-2xl">
          {loading && <p className="text-center text-blue-500">Pobieram dane menu...</p>}
          
          {menu ? (
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-xl font-semibold mb-4 text-green-600">Menu załadowane!</h2>
              {/* Tutaj wyświetlamy surowe dane, żeby sprawdzić czy są poprawne */}
              <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto">
                {JSON.stringify(menu, null, 2)}
              </pre>
            </div>
          ) : (
            !loading && <p className="text-center text-gray-500 italic">Kliknij język powyżej, aby zobaczyć menu.</p>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
