import Image from "next/image";
import Logo from "../../public/assets/KGTSlogo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="px-10 py-2 border-b-[1px] border-slate-200 flex justify-between items-center bg-black/80 fixed z-50 top-0 w-full">
      <div className="rounded-full border-2 border-white p-1">
        <Image src={Logo} height={35} alt="logo"></Image>
      </div>
      <div className="flex space-x-10 text-lg">
        <Link
          href={"/"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-primary to-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Home</p>
        </Link>
        <Link
          href={"/"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-primary to-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Blogs</p>
        </Link>
        <Link
          href={"/"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-primary to-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Events</p>
        </Link>
        <Link
          href={"/"}
          className="relative inline-bloc before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-primary to-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Resources</p>
        </Link>
        <Link
          href={"/"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-primary to-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Team</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
