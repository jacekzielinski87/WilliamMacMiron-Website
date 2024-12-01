import React from "react";
import LetterP from "../../public/assets/p.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


const NavbarRight = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] h-[50px] border-2 rounded-l-none border-black rounded-t-3xl fixed bottom-0 right-1/4 w-[440px]">
      {/* Changed right-80 to right-96 to match the new aside width */}
      <ul className="h-full">
        <li className="flex justify-around items-center h-full relative">
         

          <Link
            href="/components/Partners"
            className={`transition-colors ${
              router.pathname === "/components/Partners"
                ? "text-black"
                : "text-black hover:text-slate-600"
            }`}
          >
            <Image
              src={LetterP}
              className="cursor-pointer font-semibold hover:text-slate-600"
            />
          </Link>
        </li>
      </ul>
      
    </div>
  );
};

export default NavbarRight;
