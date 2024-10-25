"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import HeroSectionImg from "../assets/HeroSection.png";
import Logo from "../assets/KGTSlogo.png";
import Link from "next/link";
import CountUp from 'react-countup';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="px-4 pt-28 pb-4 relative -z-10 w-full text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroSectionImg.src})` }}
      >
        <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary via-purple-600 to-pink-500">
          Welcome To KGTS
        </p>
        <p className="mt-4 font-normal text-base md:text-lg text-white max-w-lg mx-auto">
          Where strategic thinking meets innovation! Join us in exploring the
          fascinating world of game theory, unraveling the complexities of
          decision-making, and enhancing our understanding of competitive and
          cooperative strategies that shape our everyday lives.
        </p>
      </div>
      {/* Short Intro */}
      <div className="p-2 flex justify-around items-center">
        <div>
          <Image src={Logo} height={300} alt="Logo"></Image>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <p className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary via-purple-600 to-pink-500">
            Who Are We?
          </p>
          <p className="mt-4 font-normal text-base md:text-lg text-white w-[600px]">
            The KGPian Game Theory Society (KGTS) is the IIT Kharagpur Chapter
            of The Indian Game Theory Socieity (IGTS). We are a student body
            founded by Mr Manoj Gadia on 19th August, 2010, dedicated to
            spreading awareness, knowledge and application of Game Theory.
          </p>
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              containerClassName="w-[150px] h-[50px] mx-4 my-2"
              className="bg-black"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
      {/* Statistics */}
        <div className="flex items-center justify-evenly p-3">
        
        <div className="flex space-x-3 items-center">
            <p className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary via-purple-600 to-pink-500"><CountUp end={50} enableScrollSpy={true} useIndianSeparators={true}/>+</p>
            <p className="text-white font-bold text-2xl">Articles</p>
        </div>
        <div className="flex space-x-3 items-center">
            <p className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary via-purple-600 to-pink-500"><CountUp end={10} enableScrollSpy={true} useIndianSeparators={true}/>+</p>
            <p className="text-white font-bold text-2xl">Events</p>
        </div>
        <div className="flex space-x-3 items-center">
            <p className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary via-purple-600 to-pink-500"><CountUp end={70} enableScrollSpy={true} useIndianSeparators={true}/>+</p>
            <p className="text-white font-bold text-2xl">Riddles</p>
        </div>
        </div>
    </div>
  );
}

export default HomePage;
