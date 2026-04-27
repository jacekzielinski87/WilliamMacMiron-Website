import React from "react";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";
import { useSearch } from "../Ui/SearchContext";

const alcohols = [
  { name: "Absinthe", count: 12 },
  { name: "Akvavit/Aquavit", count: 5 },
  { name: "Архи/Archi", count: 3 },
  { name: "Beer", count: 45 },
  { name: "Brandy", count: 18 },
  { name: "Absinthe", count: 12 },
  { name: "Akvavit/Aquavit", count: 5 },
  { name: "Akvavit/Aquavit", count: 5 },
];

const Alcohols = () => {
  // Pobieramy stany z kontekstu wyszukiwania
  const { showResults, query } = useSearch();

  // Katalog jest widoczny TYLKO wtedy, gdy nie szukamy i nie ma wyników
  const isSearchActive = (query && query.length > 0) || showResults;

  return (
    <>
      <Navbar />
      <NavbarDown />
      
      {!isSearchActive && (
        <div className="">
          <div className="lg:flex flex-col justify-center items-center m-24 gap-4 sm:grid">
            {alcohols.map((alcohol, index) => (
              <div
                key={index}
                className="bg-[url('/assets/corkTable.png')] bg-cover items-center hover:opacity-90 hover:scale-105 shadow-xl shadow-slate-700 flex justify-center transition-transform border-8 border-black border-opacity-35 h-[75px] sm:max-w-[400px] lg:max-w-[800px]"
              >
                <span className="text-lg font-serif text-black bg-white w-[750px] h-[40px] flex items-center justify-between p-4 m-2">
                  {alcohol.name}
                  <span className="text-lg text-black relative right-20">{alcohol.count}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Alcohols;
