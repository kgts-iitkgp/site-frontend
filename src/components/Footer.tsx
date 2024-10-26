import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t-[1px] border-slate-200 flex justify-between items-center bg-black/80  w-full p-2">
      <div className="flex justify-around w-full items-center">
        <div>
          <div className="flex items-center space-x-4 p-4">
            <div className="rounded-full border-2 border-white p-1">
              <Image
                src={"/assets/KGTSlogo.png"}
                alt="logo"
                height={60}
                width={60}
              ></Image>
            </div>
            <div className="font-bold text-xl ">
              THE KGPIAN GAME THEORY SOCIETY
            </div>
          </div>
          <div className="text-left tracking-wide p-4 mx-4">
            <p>Indian Institute of Technology Kharagpur,</p>
            <p>West Bengal - 721302</p>
          </div>
        </div>

        <div className="h-[190px] w-[2px] bg-neutral-300 rounded-full"></div>

        <div className="flex flex-col justify-between p-2">
          <div className="flex justify-between space-x-10">
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-semibold">Resources</p>
              <div className="mx-2">
                <ul>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-semibold">Blogs</p>
              <div className="mx-2">
                <ul>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-semibold">Resources</p>
              <div className="mx-2">
                <ul>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                  <Link className="hover:underline" href={"/"}>
                    <li>Point 1</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-left tracking-wide p-4 mx-4 flex items-center space-x-10 text-4xl">
            <Link href={"/"}>
              <p>
                <FaLinkedin />
              </p>
            </Link>
            <Link href={"/"}>
              <p>
                <FaFacebook />
              </p>
            </Link>
            <Link href={"/"}>
              <p>
                <FaInstagram />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
