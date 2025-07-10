import React from "react";
import NavBar from "../components/Layout/Navbar";

const Others = () => {
  const OthersStuff = ["Pizza", "Perfume", "Toys"];

  return (
    <>
      <NavBar />
      <div className="flex justify-center my-12 flex-1 ml-[25%] m-[25%]">
        <div className="cursor-pointer text-2xl font-serif text-black ">
          {OthersStuff.map((item, index) => (
            <ul
              key={index}
              className=" p-2 m-4 items-center hover:bg-slate-300 bg-[#C8c8c8] w-[880px] h-[40px] border-2 flex justify-center border-black shadow-3xl shadow-slate-900 rounded-3xl"
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
