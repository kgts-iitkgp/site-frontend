import Image from "next/image";
import Logo from "../../public/images/KGTSlogo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="text-white px-10 py-2 border-b-[1px] border-slate-200 flex justify-between items-center bg-black/60 fixed z-50 top-0 w-full">
      <Link href={"/"}>
        <div className="rounded-full border-2 border-white p-1">
          <Image src={Logo} height={35} alt="logo"></Image>
        </div>
      </Link>
      <div className="hidden sm:flex space-x-10 text-lg">
        <Link
          href={"/"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Home</p>
        </Link>
        <Link
          href={"/blogs"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Blogs</p>
        </Link>
        <Link
          href={"/events"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Events</p>
        </Link>
        {/* <Link
          href={"/"}
          className="relative inline-bloc before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r from-secondary to-primary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Resources</p>
        </Link> */}
        <Link
          href={"/teams"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Team</p>
        </Link>
        <Link
          href={"/about"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>About</p>
        </Link>
      </div>
      <div className="sm:hidden ">
        <div className="group flex flex-col items-end">
          <p className="text-3xl group-hover:flex border-2 border-secondary rounded-md px-1 ">
            <RxHamburgerMenu />
          </p>
          <div className="absolute hidden group-hover:flex space-y-1 transition-all transform ease-in-out duration-300 flex-col bg-black border-[1px] border-white/60 p-2 rounded-md translate-y-9 translate-x-32 group-hover:translate-x-0">
            <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/"}>Home</Link>
            </div>
            <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/blogs"}>Blogs</Link>
            </div>
            <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/events"}>Events</Link>
            </div>
            {/* <div className="px-2 hover:bg-gradient-to-r from-secondary/60 to-primary/60 rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/"}>Resources</Link>
            </div> */}
            <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/teams"}>Team</Link>
            </div>
            <div className="px-2 hover:bg-primary rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-200">
              <Link href={"/about"}>About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
