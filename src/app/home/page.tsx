"use client";
import React from "react";
import { Button } from "../../components/MovingBorder";
import Image from "next/image";
import backgroundImg from "../../../public/images/chess-bg-3.jpeg";
import Logo from "../../../public/images/KGTSlogo.png";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../components/ImageSlider";
import DotBackground from "../../components/DotBackground";

function HomePage() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/Treasure_hunt_2.jpg",
    "/images/Treasure_hunt_8.jpg",
  ];
  return (
    <div className="min-h-screen">
      <DotBackground />
      {/* Hero Section */}
      <div className="relative w-full h-full lg:h-screen px-4 sm:pt-28 pb-4 bg-cover bg-center flex justify-center items-center">
        {/* Background Image */}
        <img
          src={backgroundImg.src}
          alt="Hero Section Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex w-full h-[380px] sm:h-auto justify-center sm:justify-end items-end sm:items-center lg:mr-20 xl:mr-40">
          {/* Text Content */}
          <div className=" text-white flex flex-col justify-center w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]  sm:mr-5 relative sm:translate-y-10 sm:-top-20 sm:ml-0 mt-14 sm:mt-7 mx-6 sm:mx-12 items-center text-center sm:items-start sm:text-left ">
            <p className="text-3xl sm:text-5xl mt-5 text-center sm:text-left  lg:text-6xl xl:text-7xl font-bold text-primary">
              <span className="text-4xl">Welcome To</span> <br />The KGPian Game Theory Society
            </p>
            <p className="mt-2 text-xs  sm:ml-2 font-semibold sm:text-xl pb-5">
              Where strategic thinking meets innovation! Join us in exploring
              the game theory complexities of decision-making, and enhancing our
              understanding of competitive dynamics, collaboration strategies,
              and real-world applications.
            </p>
          </div>
        </div>
      </div>

      {/* Short Intro */}
      <div className="p-2 flex justify-around items-center">
        <div className="hidden sm:inline">
          <Image src={Logo} height={300} alt="Logo"></Image>
        </div>
        <div className="flex flex-col items-center sm:items-start space-y-2 p-2">
          <p className="sm:mt-20 md:mt-0 text-2xl md:text-4xl font-bold text-primary">
            Who Are We?
          </p>
          <p className="mt-4 font-normal text-center sm:text-left text-base md:text-lg text-white sm:w-[430px] lg:w-[600px]">
            The KGPian Game Theory Society (KGTS) is the IIT Kharagpur Chapter
            of The Indian Game Theory Socieity (IGTS). We are a student body
            founded by Mr Manoj Gadia on 19th August, 2010, dedicated to
            spreading awareness, knowledge and application of Game Theory.
          </p>
          <Link href={"/about"}>
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
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold text-primary">
            <CountUp
              end={5}
              enableScrollSpy={true}
              useIndianSeparators={true}
            />
            +
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">Articles</p>
        </div>
        <div className="my-2 flex flex-col sm:flex-row sm:space-x-3 items-center">
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold text-primary">
            <CountUp
              end={5}
              enableScrollSpy={true}
              useIndianSeparators={true}
            />
            +
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">Events</p>
        </div>
        <div className="my-2 flex flex-col sm:flex-row sm:space-x-3 items-center">
          <p className="sm:mt-20 md:mt-0 text-3xl sm:text-2xl md:text-5xl font-bold text-primary">
            <CountUp
              end={10}
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
          <p className="sm:mt-20 md:mt-0 text-2xl md:text-4xl font-bold text-primary">
            Glimpses Of Events
          </p>
        </div>
        <div className="my-10 w-[90%] mx-4 flex justify-center max-w-[900px] ">
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
              <Link href={"/events"}>
                <button className="px-4 py-2 backdrop-blur-sm border bg-primary/30 hover:bg-primary hover:scale-105 transition-all duration-300 text-white mx-auto text-center rounded-full  mt-64">
                  <span>See More →</span>
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
