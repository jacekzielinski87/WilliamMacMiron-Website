import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";

const alcohols = [
  { name: "Absinthe", image: "/assets/products/glen.jpg" },
  { name: "Akvavit/Aquavit", image: "/assets/products/auchangie.png" },
  { name: "Архи/Archi", image: "/assets/products/glen.jpg" },
  { name: "Beer", image: "/assets/products/glen.jpg" },
];

const Alcohols = () => {
  return (
    <>
      <Navbar />
      <NavbarDown />
      <div className="max-w-2xl mx-auto my-12 py-12 px-4">
        <h1 className="text-2xl font-serif text-black text-center m-6">
          <b className="">Our Alcohols Selection</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {alcohols.map((alcohol) => (
            <div
              key={alcohol.name}
              className="rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform border-2 border-zinc-800 bg-[url('/assets/corkTable.png')] bg-cover bg-center"
            >
            <span className="text-lg font-serif text-black mt-2">
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
