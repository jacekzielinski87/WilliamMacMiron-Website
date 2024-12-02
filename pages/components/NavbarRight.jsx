import React from "react";
import LetterP from "../../public/assets/p.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavbarRight = () => {
  const router = useRouter();

  return (
    <div className="bg-[#C8C8C8] h-[50px] border-2 border-black rounded-t-3xl 
      fixed bottom-0 
      w-[420px]
      left-1/2 transform -translate-x-1/1 
      rounded-b-none
      flex items-center justify-around px-12 z-50">
      <ul className="h-full w-full justify-center">
        <li className="flex justify-evenly items-center h-full relative">
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
              className="cursor-pointer font-semibold hover:text-slate-600 w-auto h-auto"
              alt="Partners"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarRight;