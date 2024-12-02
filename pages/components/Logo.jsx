import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 ">
      <Link href="/" replace> {/* Added replace to replace current route in history */}
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={45}
          height={20}
          className="cursor-pointer border-2 border-black rounded-t-xl hover:scale-110 transition-transform"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;