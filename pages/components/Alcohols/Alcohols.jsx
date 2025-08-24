import React from "react";
import Image from "next/image";
import Navbar from "../Layout/Navbar";
import NavbarDown from "../Layout/NavbarDown";

const alcohols = [
  { name: "Glen Mavis", image: "/assets/products/glen.jpg" },
  { name: "Auchangie", image: "/assets/products/auchangie.png" },
  { name: "Glen Mavis", image: "/assets/products/glen.jpg" },
  { name: "Auchangie", image: "/assets/products/auchangie.png" },
  { name: "Glen Mavis", image: "/assets/products/glen.jpg" },
  { name: "Auchangie", image: "/assets/products/auchangie.png" },
  { name: "Glen Mavis", image: "/assets/products/glen.jpg" },
  { name: "Auchangie", image: "/assets/products/auchangie.png" },
  { name: "Glen Mavis", image: "/assets/products/glen.jpg" },
];

const Alcohols = () => {
  return (
    <>
      <Navbar />
      <NavbarDown />
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-serif text-black text-center m-6">
          <b className="">Our Alcohols Selection</b>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {alcohols.map((alcohol) => (
            <div
              key={alcohol.name}
              className="rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform border-2 border-zinc-800 bg-[url('/assets/corkTable.png')] bg-cover bg-center"
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={alcohol.image}
                  alt={alcohol.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow"
                />
              </div>
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
