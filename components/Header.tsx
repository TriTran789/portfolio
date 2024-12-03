import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 bg-[#08110c] shadow-sm shadow-white px-16 flex items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
    </div>
  );
};

export default Header;
