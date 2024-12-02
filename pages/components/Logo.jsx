import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={70}
          height={50}
          className="cursor-pointer border-2 border-black rounded-t-xl"
        />
      </Link>
    </div>
  );
};

export default Logo;