import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full z-50">
      <div
        className="bg-[url(/assets/corkTable.png)] p-4
        w-full mx-4 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[58px]
        flex items-center
        bg-[url('/assets/cork-texture.png')] bg-repeat border-r-8 border-black border-opacity-35 border-b-8 border-black border-opacity-35 border-l-8 border-black border-opacity-35"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 flex justify-center">
            <Link
              href="/Alcohols/Alcohols"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Alcohols/Alcohols"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50 flex items-center justify-center bg-white">
                <Image
                  src="/assets/Menu 1.png"
                  alt="Menu 1"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="relative z-50">
              <SearchBar />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Link
              href="/Others/Others"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Others/Others"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50 flex items-center justify-center bg-white">
                <Image
                  src="/assets/Menu 2.png"
                  alt="Menu 2"
                  width={30}
                  height={30}
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
