import React from "react";
import NavBar from "../pages/components/Layout/Navbar"
import NavbarDown from "../pages/components/Layout/NavbarDown";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Nawigacja zawsze na górze */}
      <NavBar />
      <NavbarDown />
      
      {/* Główna treść strony */}
      <main className="flex flex-col items-center justify-center pt-40 px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl font-serif font-bold mb-6 uppercase tracking-tighter text-zinc-900">
            William MacRiron
          </h1>
          <p className="font-serif italic text-gray-600 text-lg">
            Whisky-focused creative mind and collection explorer.
          </p>
        </div>
      </main>
    </div>
  );
};

// To naprawi błąd "The default export is not a React Component"
export default Home;
