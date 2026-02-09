import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div
        className="bg-[url(/assets/corkTable.png)]
        w-full mx-42 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[64px] md:h-[58px]
        flex items-center
        bg-[url('/assets/cork-texture.png')] bg-repeat border-r-8 border-black border-opacity-35 border-l-8 border-black border-opacity-35 border-t-8 border-black border-opacity-35 shadow-lg shadow-slate-700"
      >
        <div className="flex justify-center w-full px-2">
          <div className="flex justify-center">
            <Link
              href="/Informations/Informations"
              className={`transition-colors relative ${
                router.pathname === "/Informations/Informations"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[28px] w-[28px] md:h-[32px] md:w-[32px] flex items-center justify-center">
                <Image
                  src="/assets/i.png"
                  alt="Menu 1"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <SearchBar />
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/Partners/Partners"
              className={`transition-colors relative ${
                router.pathname === "/Partners/Partners"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[28px] w-[28px] md:h-[32px] md:w-[32px] flex items-center justify-center">
                <Image
                  src="/assets/p.png"
                  alt="Menu 2"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute left-1/2 top-4
  -translate-x-1/2
  hidden md:block">
          <p className="text-black bg-white px-4 font-rouge text-lg md:text-2xl">
            Testing Notes
          </p>
        </div>
      </div>
  );
};

export default NavBar;
