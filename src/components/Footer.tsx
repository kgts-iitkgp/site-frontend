import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-white border-t-[1px] border-slate-200 flex justify-between items-center bg-black/60  w-full p-2">
      <div className="flex flex-col  sm:flex-row justify-around w-full items-center">
        <div className="flex items-center space-x-4 p-2">
          <div className="rounded-full">
            <Image
              src={"/images/LogoWhite.jpeg"}
              alt="logo"
              height={60}
              width={60}
              className="w-[45px] rounded-full"
            ></Image>
          </div>
          <div className="flex flex-col items-center justify-start space-y-2">
            <div className="font-bold sm:text-xl">
              THE KGPIAN GAME THEORY SOCIETY
            </div>
            <div className="tracking-wide text-xs sm:text-base -translate-x-7">
              <p>Indian Institute of Technology Kharagpur,</p>
              <p>West Bengal - 721302</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-2">
          <div className="text-left tracking-wide p-2 flex items-center space-x-10 text-2xl sm:text-4xl">
            <Link href={"https://www.linkedin.com/company/the-kgts/posts/?feedView=all"}>
              <p>
                <FaLinkedin />
              </p>
            </Link>
            <Link href={"https://www.facebook.com/The.KGTS"}>
              <p>
                <FaFacebook />
              </p>
            </Link>
            <Link href={"https://www.instagram.com/kgts.iitkgp/"}>
              <p>
                <FaInstagram />
              </p>
            </Link>
            <Link href={"https://medium.com/@kgtsiitkgp"}>
              <p>
                <FaMedium />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
