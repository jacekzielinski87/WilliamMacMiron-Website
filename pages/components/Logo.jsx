import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">
      <Link href="/" replace> {/* Added replace to replace current route in history */}
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={55}
          height={100}
          className="cursor-pointer border-2 border-black rounded-t-3xl hover:scale-110 transition-transform"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;