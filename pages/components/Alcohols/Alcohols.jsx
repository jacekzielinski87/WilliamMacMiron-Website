import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";

const alcohols = [
  { name: "Absinthe", count: 12 },
  { name: "Akvavit/Aquavit", count: 5 },
  { name: "Архи/Archi", count: 3 },
  { name: "Beer", count: 45 },
  { name: "Brandy", count: 18 },
  { name: "Cachaça", count: 7 },
  { name: "Cider", count: 10 },
  { name: "Gin", count: 23 },
  { name: "Kımız", count: 4 },
  { name: "Mead", count: 6 },
  { name: "Mezcal", count: 8 },
  { name: "New Make / White Dog / Moonshine", count: 2 },
  { name: "Non-alcoholic beverages", count: 14 },
  { name: "Okowita", count: 9 },
  { name: "Ouzo", count: 3 },
  { name: "Rum", count: 25 },
  { name: "Sake", count: 11 },
  { name: "Soju", count: 15 },
  { name: "Slivovitz / Śliwowica", count: 5 },
  { name: "Tequila", count: 19 },
  { name: "Tincture", count: 2 },
  { name: "Vodka", count: 40 },
  { name: "Whisky / Whiskey / Bourbon / Aged Spirit", count: 50 },
  { name: "Whisky / Whiskey / Bourbon - not yet", count: 6 },
  { name: "Wine", count: 30 },
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
              <span className="text-lg font-serif text-black bg-white w-[750px]  h-[40px] flex items-center justify-between p-4">
                {alcohol.name}
                <span className=" text-lg text-black">{alcohol.count}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alcohols;
