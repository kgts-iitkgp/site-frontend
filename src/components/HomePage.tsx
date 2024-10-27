"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import HeroSectionImg from "../../public/assets/HeroSection.png";
import Logo from "../../public/assets/KGTSlogo.png";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import DotBackground from './ui/DotBackground';

function HomePage() {
  const images = [
    "/assets/Intro Sem/image1.jpg",
    "/assets/Tresure Hunt/image1.jpg",
  ];
  return (
    <div>
      <DotBackground />
      {/* Hero Section */}
      <div
        className="px-4 pt-28 sm:pt-40 pb-4 relative -z-10 w-full text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroSectionImg.src})` }}
      >
        <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
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
        <div className="hidden sm:inline">
          <Image src={Logo} height={300} alt="Logo"></Image>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 p-2">
          <p className="sm:mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
            Who Are We?
          </p>
          <p className="mt-4 font-normal text-center sm:text-left text-base md:text-lg text-white sm:w-[600px]">
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
      <div className="flex flex-col sm:flex-row items-center justify-evenly sm:justify-evenly p-3 sm:mb-10">
        <div className="my-2 flex flex-col sm:flex-row sm:space-x-3 items-center">
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
            <CountUp
              end={50}
              enableScrollSpy={true}
              useIndianSeparators={true}
            />
            +
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">Articles</p>
        </div>
        <div className="my-2 flex flex-col sm:flex-row sm:space-x-3 items-center">
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
            <CountUp
              end={10}
              enableScrollSpy={true}
              useIndianSeparators={true}
            />
            +
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">Events</p>
        </div>
        <div className="my-2 flex flex-col sm:flex-row sm:space-x-3 items-center">
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
            <CountUp
              end={70}
              enableScrollSpy={true}
              useIndianSeparators={true}
            />
            +
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">Riddles</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center">
        <div className="w-[95%] h-[1px] rounded-full bg-neutral-300"></div>
      </div>

      {/* Carousal of events */}
      <div className="p-2 flex flex-col items-center my-10">
        <div>
          <p className="sm:mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary">
            Glimpses Of Events
          </p>
        </div>
        <div className="my-10 w-[90%] mx-4 flex justify-center ">
          <ImagesSlider className="h-[23rem]" images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 w-full flex flex-col justify-center items-center"
            >
              <Link href={"/"}>
                <button className="px-4 py-2 backdrop-blur-sm border bg-gradient-to-r from-secondary/30  to-primary/30 hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300 text-white mx-auto text-center rounded-full  mt-64">
                  <span>See More →</span>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </Link>
            </motion.div>
          </ImagesSlider>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
