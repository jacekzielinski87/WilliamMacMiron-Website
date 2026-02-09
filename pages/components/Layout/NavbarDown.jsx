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
        mx-4 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[64px] md:h-[58px]
        flex items-center
        bg-[url('/assets/cork-texture.png')] bg-repeat border-r-8 border-black border-opacity-35 border-l-8 border-black border-opacity-35 border-t-8 border-black border-opacity-35"
      >
        <div className="flex w-full px-32">
        <div className=" shadow-xl shadow-zinc-900">
            <Link
              href="/Informations/Informations"
              className={`transition-colors relative ${
                router.pathname === "/Informations/Informations"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="bg-white h-[30px] w-[30px] flex items-center justify-center">
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
          <div className="flex justify-center items-center w-full">
          <div className="shadow-xl shadow-zinc-900">
            <SearchBar />
            </div>
          </div>
        <div className="">
            <Link
              href="/Partners/Partners"
              className={`transition-colors ${
                router.pathname === "/Partners/Partners"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className=" shadow-xl shadow-zinc-900 bg-white h-[30px] w-[30px] flex items-center justify-center">
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
        <div className="absolute left-1/2 top-4 -translate-x-1/2">
          <p className="text-black bg-white px-4 font-rouge lg:text-3xl md:text-xl">
            Testing Notes
          </p>
          </div>
        </div>
        </div>
    );
};

export default NavBar;
