import React from "react";
import NavBar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const Others = () => {
  const OthersStuff = [
    "Pizza",
    "Toys",
    "Cards",
    "Perfume",
    "Erotic",
    "Other",
    "Other",
    "Other",
  ];

  return (
    <>
      <NavBar />
      <NavbarDown />
      <div className="max-w-xl w-full mx-auto my-28 px-4 flex justify-center">
        <div className="grid grid-cols-1 justify-items-center w-full gap-4">
          {OthersStuff.map((item, index) => (
            <ul
              key={index}
              className="bg-[url('/assets/corkTable.png')] bg-cover  items-center hover:opacity-90 hover:scale-105 shadow-lg shadow-slate-400 flex justify-center items-center transition-transform bg-[url('/assets/corkTable.png')] bg-cover bg-center border-8 border-black border-opacity-35 h-[75px] sm:max-w-[400px] lg:max-w-[800px]"
            >
              <span className="bg-white flex justify-start items-center w-[750px] h-[40px] text-black text-lg font-serif p-4">
                {item}
              </span>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
