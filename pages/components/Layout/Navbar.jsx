import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center">
      <div
        className="bg-[url(/assets/corkTable.png)]
        w-full mx-42 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[64px] md:h-[58px]
        flex justify-between items-center
        bg-[url('/assets/cork-texture.png')] bg-repeat border-r-8 border-black border-opacity-35 border-l-8 border-black border-opacity-35 border-t-8 border-black border-opacity-35 shadow-lg shadow-slate-700"
      >
        <div className="flex w-full px-32">
          <div className="">
            <Link
              href="/Alcohols/Alcohols"
              className={`transition-colors z-[50] ${
                router.pathname === "/Alcohols/Alcohols"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className=" shadow-xl shadow-zinc-900 bg-white h-[30px] w-[30px] flex items-center justify-center">
                <Image
                  src="/assets/Menu 1.png"
                  alt="Menu 1"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="shadow-xl shadow-zinc-900">
              <SearchBar />
            </div>
          </div>
          <div className="shadow-xl shadow-zinc-900">
            <Link
              href="/Others/Others"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Others/Others"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[30px] w-[30px] flex items-center justify-center">
                <Image
                  src="/assets/Menu 2.png"
                  alt="Menu 2"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
