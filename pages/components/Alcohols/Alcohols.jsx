import React from "react";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";

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
  return (
    <>
      <Navbar />
      <NavbarDown />
      <div className="">
        <div className="lg:flex flex-col justify-center items-center m-24 gap-4 sm:grid">
          {alcohols.map((alcohol) => (
            <div
              key={alcohol.index}
              className="bg-[url('/assets/corkTable.png')] bg-cover  items-center hover:opacity-90 hover:scale-105 shadow-lg shadow-slate-400 flex justify-center items-center transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 h-[75px] sm:max-w-[400px] lg:max-w-[800px]"
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
