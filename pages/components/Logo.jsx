import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 overflow-visible mb-5 h-[20px]">
      <Link href="/" replace> {/* Added replace to replace current route in history */}
        <Image
          src="/assets/logoo.png"
          alt="Logo"
          width={70}
          height={100}
          className="cursor-pointer border-2 border-black rounded-t-3xl hover:scale-100 transition-transform p-2 h-[50px] w-[70px]"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;