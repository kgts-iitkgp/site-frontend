"use client";

import Image from "next/image";
import Logo from "../../public/images/LogoWhite.jpeg";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";
import { useState } from "react";

function Navbar() {
  const [isMenu, setMenu] = useState(false);
  return (
    <div className="text-white px-10 py-2 border-b-[1px] border-slate-200 flex justify-between items-center bg-black/60 fixed z-50 top-0 w-full">
      <Link href={"/"}>
        <div className="rounded-full">
          <Image className="rounded-full" src={Logo} height={30} alt="logo"></Image>
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
            className="text-2xl group-hover:rotate-180 transition-all duration-300 rounded-md px-1 "
            onClick={() => setMenu(!isMenu)}
          >
            <RxHamburgerMenu />
          </p>
          <div className="translate-x-[250px] group-hover:translate-x-[42px] transition-all duration-300">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
