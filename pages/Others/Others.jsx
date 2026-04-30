import React from "react";
import NavBar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const Others = () => {
  // Zmieniamy listę na obiekty z nazwą i licznikiem
  const OthersStuff = [
    { name: "Pizza", count: 12 },
    { name: "Toys", count: 8 },
    { name: "Cards", count: 24 },
    { name: "Perfume", count: 15 },
    { name: "Erotic", count: 7 },
    { name: "Other", count: 3 },
    { name: "Other", count: 1 },
    { name: "Other", count: 0 },
  ];

  return (
    <>
      <NavBar />
      <NavbarDown />
      <div className="max-w-[976px] mx-auto m-12 p-14">
        <div className="grid grid-cols-1 justify-items-center w-full gap-6">
          {OthersStuff.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[url('/assets/corkTable.png')] bg-cover bg-center 
                         border-8 border-black border-opacity-35 shadow-zinc-900 shadow-md
                         flex justify-center items-center transition-all duration-300
                         hover:opacity-95 hover:scale-[1.02] cursor-pointer
                         min-h-[80px] p-2"
            >
              {/* Flex justify-between rozsuwa tekst na lewo i liczbę na prawo */}
              <div className="bg-white flex items-center justify-between w-full h-full min-h-[45px] 
                               text-black text-md font-bold font-serif px-8 py-2 shadow-zinc-900 shadow-md">
                <span className="">{item.name}</span>
                <span className="font-sans font-bold text-gray-600">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
