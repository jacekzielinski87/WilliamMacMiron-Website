import React from "react";
import MenuA from "../../../public/assets/menu1.png";
import MenuB from "../../../public/assets/menu2.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import SearchBar from "../Ui/Searchbar";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full z-50">
      <div
        className="bg-[#C8C8C8] p-4 border-2 border-black rounded-b-3xl 
        w-full mx-4 md:mx-0 
        md:w-[640px] lg:w-[960px] 
        h-[40px] shadow-xl
        bg-[url('/assets/cork-texture.png')] bg-repeat"
      >
        <ul className="relative z-50">
          <li className="flex justify-around gap-40">
            <Link
              href="/Alcohols/Alcohols"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Alcohols/Alcohols"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50">
                <Image
                  src={MenuA}
                  className="cursor-pointer relative bottom-2 w-auto h-[20px]"
                  alt="Alcohols Menu"
                />
              </div>
            </Link>
            <Link
              href="/Others/Others"
              className={`transition-colors relative z-50 ${
                router.pathname === "/Others/Others"
                  ? "text-[#5c3d1e]"
                  : "text-[#5c3d1e] hover:text-[#8b6b43]"
              }`}
            >
              <div className="relative z-50">
                <Image
                  src={MenuB}
                  className="cursor-pointer relative bottom-2 w-auto h-[20px]"
                  alt="Others Menu"
                />
              </div>
            </Link>
          </li>
        </ul>
        <div className="relative z-50">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
