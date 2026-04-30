import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "../Ui/Searchbar";
import AdminLauncher from "../Admin/AdminLauncher";

const NavBar = () => {
  const router = useRouter();
  const { locale, push, pathname, query, asPath } = router;

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-[110]">
      <div
        className="
        /* 1. Ustawienia ramki z pliku */
        border-[10px]
        [border-image:url(/assets/border.png)_100_repeat]
        
        /* 2. Tło wewnętrzne paska */
        bg-[url(/assets/corkTable.png)] bg-repeat
        
        /* 3. Wymiary i pozycjonowanie */
        w-full md:mx-0 
        md:w-[640px] lg:w-[1028px]
        h-[64px] md:h-[80px]
        flex items-center justify-center shadow-md shadow-zinc-900"
      >
        {/* Kontener na zawartość */}
        <div className="flex items-center justify-center gap-8 w-full">
          
          {/* 1. LEWA STRONA - Informations */}
          <div className="shadow-md shadow-zinc-900 bg-white h-[45px] w-[140px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer relative right-[17px]">
            <Link href="/Alcohols/Alcohols" className="w-full h-full flex items-center justify-center text-md font-bold font-serif">
              <p className="">Spirits & More</p>
            </Link>
          </div>

          {/* 2. ŚRODEK - SearchBar */}
          <div className="shadow-zinc-900 h-[32px] w-[450px] flex items-center justify-center px-4">
            <SearchBar />
          </div>

          {/* 3. PRAWA STRONA - Partners */}
          <div className="shadow-md shadow-zinc-900 bg-white h-[45px] w-[140px] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer relative left-[17px] text-md font-bold font-serif">
            <Link href="/Others/Others" className="w-full h-full flex items-center justify-center">
              <p className="">Sensory World</p>
            </Link>
          </div>
        </div>

        <div className="absolute right-20 bottom-0 -translate-y-1/2">
          <AdminLauncher />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
