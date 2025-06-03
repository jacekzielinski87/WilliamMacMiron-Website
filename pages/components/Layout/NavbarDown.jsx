import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";



const NavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full z-50">
      <div
        className="bg-[url(/assets/corkTable.png)] p-4 
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
                
              </div>
            </Link>
          </li>
        </ul>
    </div>
    </div>
  );
};

export default NavBar;
