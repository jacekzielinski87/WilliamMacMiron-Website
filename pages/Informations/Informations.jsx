import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const Informations = () => {
  const [isAdult, setIsAdult] = useState(null);

  useEffect(() => {
    const ageConfirmed = localStorage.getItem("ageConfirmed");
    if (ageConfirmed === "true") {
      setIsAdult(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <NavbarDown />

      {/* Główny kontener centrujący wszystkie elementy do max 800px */}
      <main className="max-w-[800px] mx-auto px-4 py-24 flex flex-col gap-8">
        
        {/* Sekcja 1: Ostrzeżenie */}
        <div
          className="w-full flex justify-center items-center shadow-xl shadow-slate-700 bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 transition-transform hover:scale-[1.01]"
          role="alert"
        >
          <div className="bg-white flex flex-col items-center justify-center text-center p-6 m-2 w-full">
            <p className="text-red-600 text-lg font-serif font-bold uppercase tracking-wide">
              Responsible Enjoyment:
            </p>
            <p className="font-serif text-black text-sm md:text-base leading-relaxed">
              This website contains content related to alcoholic beverages. You
              must be 18 years or older to access this site. Please drink
              mindfully and responsibly.
            </p>
          </div>
        </div>

        {/* Sekcja 2: O założycielu */}
        <div className="w-full flex justify-center items-center shadow-xl shadow-slate-900 bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 transition-transform hover:scale-[1.01]">
          <div className="bg-white flex items-center justify-center w-full min-h-[150px] p-6 m-2">
            <p className="font-serif text-black text-center text-sm md:text-lg leading-relaxed">
              <span className="font-bold">William MacMiron</span> is the founder and creative mind behind this
              whisky-focused website. With over a decade of experience in the
              world of fine spirits, William works professionally as a certified
              whisky sommelier. His deep appreciation for tradition,
              craftsmanship, and the art of distillation is at the heart of this
              platform.
            </p>
          </div>
        </div>

        {/* Sekcja 3: Misja */}
        <div className="w-full flex justify-center items-center shadow-xl shadow-slate-900 bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 transition-transform hover:scale-[1.01]">
          <div className="bg-white flex items-center justify-center w-full min-h-[150px] p-6 m-2">
            <p className="font-serif text-black text-center text-sm md:text-lg leading-relaxed">
              Through this site, William shares his personal insights, tasting
              notes, and recommendations—whether you're a seasoned connoisseur or
              just beginning your whisky journey. His goal is to create a
              welcoming space where education and passion meet, celebrating the
              rich heritage and diversity of whisky from around the world.
            </p>
          </div>
        </div>

      </main>
    </>
  );
};

export default Informations;
