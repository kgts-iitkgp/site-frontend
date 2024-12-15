import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

type BlogCardProps = {
  id: string;
  name: string;
  designation: string;
  image: string;
  FBlink: string;
  InstaLink: string;
  LinkedInLink: string;
};

export const TeamCard: React.FC<BlogCardProps> = ({
  id,
  name,
  designation,
  image,
  FBlink,
  InstaLink,
  LinkedInLink,
}) => {
  return (
    <div className="relative cursor-default bg-black w-[250px] h-[400px] bg-cardbg shadow-md overflow-hidden transform transition-all duration-400 border-2 border-primary mx-auto rounded-2xl hover:-translate-y-2 flex flex-col justify-center">
      <div className="p-3 bg-cardbg overflow-hidden h-[300px]">
        <Image
          src={`${image}`}
          alt={name}
          width={400}
          height={700}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="p-3">
        <p className="text-center text-xl text-primary font-bold">{name}</p>
        <p className="text-center text-lg text-tertiary font-bold">{designation}</p>
      </div>
      <div className="absolute transition-all duration-400 opacity-0 hover:opacity-100 h-full w-full flex justify-center items-center bg-black/70">
        <div className="flex space-x-7 text-4xl text-primary">
          <Link href={"/"} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaFacebook />
          </Link>
          <Link href={"/"} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaInstagram />
          </Link>
          <Link href={"/"} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};
