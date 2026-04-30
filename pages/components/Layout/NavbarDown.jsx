import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-[110]">
      <div
        className="
        /* 1. Tło korkowe */
        bg-[url(/assets/corkTable.png)] bg-repeat
        
        /* 2. Ramka z obrazka (taka jak w górnym pasku) */
        border-[10px] border-solid 
        [border-image:url(/assets/border.png)_100_repeat]
        
        /* 3. Wymiary i układ */
        mx-4 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[64px] md:h-[80px]
        flex items-center relative shadow-md shadow-zinc-900"
      >
        <div className="flex w-full px-32 items-center">
          
          {/* LEWA STRONA - Informations */}
          <div className="">
            <Link
              href="/Informations/Informations"
              className={`transition-colors relative ${
                router.pathname === "/Informations/Informations"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[45px] w-[150px] flex items-center justify-center shadow-md shadow-zinc-900 text-md font-bold font-serif relative right-[38px]">
                <p className="">Informations</p>
              </div>
            </Link>
          </div>

          {/* ŚRODEK - SearchBar */}
          <div className="flex justify-center items-center w-full px-4">
            <div className="shadow-xl shadow-zinc-900 w-full max-w-[400px]">
              <SearchBar />
            </div>
          </div>

          {/* PRAWA STRONA - Partners */}
          <div className="">
            <Link
              href="/Partners/Partners"
              className={`transition-colors ${
                router.pathname === "/Partners/Partners"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[45px] w-[150px] flex items-center justify-center shadow-md shadow-zinc-900 text-md font-bold font-serif relative left-[38px] ">
                <p className="">Partners</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Etykieta Testing Notes (Środek) */}
        <div className="absolute left-1/2 -translate-x-1/2 ">
          <div className="bg-white px-4 py-1 shadow-md shadow-zinc-900 w-[380px]">
            <p className="text-black lg:text-3xl md:text-lg text-center font-['Elista'] whitespace-nowrap">
              Testing Notes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
