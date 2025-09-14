import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";

const alcohols = [
  { name: "Absinthe" },
  { name: "Akvavit/Aquavit" },
  { name: "Архи/Archi" },
  { name: "Beer" },
  { name: "Brandy" },
  { name: "Cachaça" },
  { name: "Cider" },
  { name: "Gin" },
  { name: "Kımız" },
  { name: "Mead" },
  { name: "Mezcal" },
  { name: "New Make / White Dog / Moonshine" },
  { name: "Non-alcoholic beverages" },
  { name: "Okowita" },
  { name: "Ouzo" },
  { name: "Rum" },
  { name: "Sake" },
  { name: "Soju" },
  { name: "Slivovitz / Śliwowica" },
  { name: "Tequila" },
  { name: "Tincture" },
  { name: "(Vodka" },
  { name: "Whisky / Whiskey / Bourbon / Aged Spirit" },
  { name: "Whisky / Whiskey / Bourbon - not yet" },
  { name: "Wine" },
];

const Alcohols = () => {
  return (
    <>
      <Navbar />
      <NavbarDown />
      <div className="max-w-xl w-full mx-auto my-6 py-12 px-4 flex justify-center">
        <div className="grid grid-cols-1 gap-6 justify-items-center w-full">
          {alcohols.map((alcohol) => (
            <div
              key={alcohol.index}
              className="shadow-xl shadow-slate-900 p-4 flex justify-center items-center transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 w-[800px] h-[75px] hover:opacity-90 hover:scale-105"
            >
              <span className="text-lg font-serif text-black bg-white w-[750px]  h-[40px] flex items-center justify-center">
                {alcohol.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alcohols;
