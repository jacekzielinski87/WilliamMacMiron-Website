import React from "react";
import NavBar from "../components/Layout/Navbar";
import NavbarDown from "../components/Layout/NavbarDown";

const Others = () => {
  const OthersStuff = ["Pizza", "Toys", "Cards" , "Perfme"];

  return (
    <>
      <NavBar />
      <NavbarDown />
      <div className="flex justify-center my-12 flex-1 ml-[25%] m-[25%]">
        <div className="cursor-pointer text-2xl font-serif text-black">
          {OthersStuff.map((item, index) => (
            <ul
              key={index}
              className="bg-[url('/assets/corkTable.png')] bg-cover bg-center p-2 m-4 my-7 items-center hover:opacity-80 hover:scale-105 transition-all duration-300
                w-[600px] h-[175px] border-2 flex justify-center border-black shadow-xl shadow-slate-900 rounded-3xl"
            >
              {item}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
