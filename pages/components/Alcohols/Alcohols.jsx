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
  const { showResults, query } = useSearch();
  const isSearchActive = (query && query.length > 0) || showResults;

  return (
    <>
      <Navbar />
      <NavbarDown />
      
      {!isSearchActive && (
        <div className="max-w-[975px] mx-auto m-12 p-14">
          <div className="grid grid-cols-1 justify-items-center w-full gap-6">
            {alcohols.map((alcohol, index) => (
              <div
                key={index}
                className="w-full bg-[url('/assets/corkTable.png')] bg-cover bg-center 
                          border-[10px]
                          [border-image:url(/assets/border.png)_100_repeat] shadow-md shadow-zinc-900
                           flex justify-center items-center transition-all duration-300
                           hover:opacity-95 hover:scale-[1.02] cursor-pointer
                           min-h-[80px] p-2"
              >
                {/* Biały pasek: justify-between rozsunie nazwę i liczbę na boki */}
                <div className="bg-white flex items-center justify-between w-full h-full min-h-[45px] 
                                text-black text-md font-bold font-serif px-8 py-2 shadow-inner shadow-zinc-900 shadow-md">
                  <span>{alcohol.name}</span>
                  <span className="font-sans font-bold text-gray-600">
                    {alcohol.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Alcohols;
