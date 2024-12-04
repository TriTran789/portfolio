import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 bg-[#08110c] shadow-sm px-4 sm:px-8 md:px-16 flex items-center justify-between sticky top-0">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <div className="text-white md:text-xl flex gap-6 sm:gap-10 lg:gap-16">
        <a href="#infor">Infor</a>
        <a>Skill</a>
        <a>Project</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Header;
