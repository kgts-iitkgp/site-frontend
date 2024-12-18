"use client";

import Image from "next/image";
import Logo from "../../public/images/KGTSlogo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";
import { useState } from "react";

function Navbar() {
  const [isMenu, setMenu] = useState(false);
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
          href={"/about"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>About</p>
        </Link>
        <Link
          href={"/events"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Events</p>
        </Link>
        <Link
          href={"/blogs"}
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary  before:transition-all before:duration-300 hover:before:w-full"
        >
          <p>Blogs</p>
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
      </div>
      <div className="sm:hidden ">
        <div className="group">
          <p
            className="text-3xl active:scale-95 hover:scale-105 transition-all duration-300 border-2 border-secondary rounded-md px-1 "
            onClick={() => setMenu(!isMenu)}
          >
            <RxHamburgerMenu />
          </p>
          <div className="translate-x-[230px] group-hover:translate-x-[42px] transition-all duration-200">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
