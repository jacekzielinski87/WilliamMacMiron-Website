import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full z-[100]">
      <div
        className="bg-[url(/assets/corkTable.png)] p-4
        w-full mx-4 md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[58px]
        flex items-center
        bg-[url('/assets/cork-texture.png')] bg-repeat border-r-8 border-black border-opacity-35 border-l-8 border-black border-opacity-35 border-t-8 border-black border-opacity-35"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 flex justify-center">
            <Link
              href="/Informations/Informations"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Informations/Informations"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50 flex items-center justify-center bg-white">
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
          <div className="flex-1 flex justify-center">
            <div className="relative z-50">
              <SearchBar />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Link
              href="/Partners/Partners"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Partners/Partners"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50 flex items-center justify-center bg-white">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 my-1">
          <Link href="/" replace>
            <Image
              src="/assets/logoo.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer hover:scale-100 transition-transform p-4 w-[70px] h-[65px]"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
