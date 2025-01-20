import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
//import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

type BlogCardProps = {
  id: number;
  name: string;
  designation: string;
  image: string;
  FBLink: string;
  InstaLink: string;
  LinkedInLink: string;
  MailLink: string;
};

export const TeamCard: React.FC<BlogCardProps> = ({
  name,
  designation,
  image,
  FBLink,
  LinkedInLink,
  MailLink,
}) => {
  return (
    <div className="relative cursor-default bg-black w-[250px] h-[400px] bg-cardbg shadow-md overflow-hidden transform transition-all duration-400 border-2 border-primary mx-auto rounded-2xl hover:-translate-y-2 flex flex-col justify-start">
      <div className="pl-3 pr-3 pt-3 bg-cardbg overflow-hidden h-[310px]">
        <Image
          src={`${image}`}
          alt={name}
          width={400}
          height={700}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <p className="absolute bottom-[13%] left-1/2 transform -translate-x-1/2 text-center text-xl text-primary font-bold whitespace-nowrap">{name}</p>
      {designation==="Publicity and Sponsorship Head" && <p className="absolute bottom-[2.5%] left-1/2 transform -translate-x-1/2 text-center text-lg text-tertiary font-bold w-full" style={{ lineHeight: '1.1' }}>{designation}</p>}
      {designation!=="Publicity and Sponsorship Head" && <p className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-center text-lg text-tertiary font-bold w-full" style={{ lineHeight: '1.1' }}>{designation}</p>}
      <div className="absolute transition-all duration-400 opacity-0 hover:opacity-100 h-full w-full flex justify-center items-center bg-black/70">
        <div className="flex space-x-7 text-4xl text-primary">
          <Link href={LinkedInLink} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaLinkedin />
          </Link>
          {/* <Link href={InstaLink} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaInstagram />
          </Link> */}
          <Link href={MailLink} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaEnvelope />
          </Link>
          <Link href={FBLink} className="transition-all duration-300 hover:scale-110 active:scale-95">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};
