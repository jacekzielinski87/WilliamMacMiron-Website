import React from "react";
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
  
];

const Alcohols = () => {
  return (
    <>
      <Navbar />
      <NavbarDown />
      <div className="mx-auto pt-24 pb-24 flex justify-center z-10">
        <div className="grid grid-cols-1 gap-6 justify-items-center">
          {alcohols.map((alcohol) => (
            <div
              key={alcohol.index}
              className="shadow-lg shadow-slate-400 p-4 flex justify-center items-center transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 w-[800px] h-[75px]"
            >
              <span className="text-lg font-serif text-black bg-white w-[750px] h-[40px] flex items-center justify-between p-4">
                {alcohol.name}
                <span className=" text-lg text-black relative right-20">{alcohol.count}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alcohols;
