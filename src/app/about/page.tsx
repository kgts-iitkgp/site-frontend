"use client";
import React from "react";
import "../output.css";
import DotBackground from "@/components/DotBackground";
import { PiStrategyBold } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen">
      <DotBackground />
      {/* <div className="relative bg-black w-full h-full px-4 sm:pt-28 pb-4 bg-cover bg-center flex justify-center items-center">
        <img
          src="/images/fullteam2.jpg" // the background image without the dice
          alt="full team image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />
        <div className="z-20 flex h-[400px] w-[300px] md:w-[700px] lg:w-[900px] sm:h-[650px] justify-center items-end md:-translate-y-28 lg:-translate-y-20">
         
          <div className=" text-white flex flex-col justify-center ">
            <p className="text-3xl sm:text-5xl mt-5 text-center lg:text-7xl font-bold text-primary">
              About
            </p>
            <p className="mt-2 text-center  sm:ml-2 font-semibold text-xs md:text-sm lg:text-xl pb-5">
              <b>The KGPian Game Theory Society</b>, abbreviated as <b>KGTS</b>,
              is <b>IIT Kharagpur’s game theory organisation.</b> It is a
              dynamic and intellectually stimulating community for students
              passionate about the study and application of game theory.
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col justify-center items-center lg:w-4/5">
          <div className="text-center mt-20">
            <h1 className="text-3xl sm:text-5xl mt-5 text-center font-bold text-primary">
              Our History
            </h1>
          </div>
          <div className="w-full md:w-4/5 h-auto px-8 py-4 sm:p-8 flex flex-col sm:flex-row justify-center items-center">
            <div className="w-full sm:w-[50%] h-auto flex justify-center object-cover overflow-hidden">
              <img
                src="/images/manojgadia.jpeg"
                alt="Image 2"
                className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:filter hover:grayscale hover:contrast-125"
              />
            </div>
            <div className="w-full sm:w-[45%] h-auto text-base md:text-lg text-left text-white my-6 mx-6">
              <p className="text-tertiary text-2xl md:text-3xl lg:text-4xl font-bold my-2">
                Founding
              </p>
              <p>
                <b>The KGPian Game Theory Society</b> was founded on{" "}
                <b>19th August 2010</b> by <b>Mr. Manoj Gadia</b>. It is a
                student body which organizes various Game Theory related
                programs. With a motive of spreading awareness, knowledge and
                application of Game Theory, first official session of society
                was 15th June 2011 to 14th June 2012. Since then the society has
                seen tremendous growth over the years and witnessed good
                response from students and game theory enthusiasts. By the able
                guidance and vision of its founder Manoj Gadia, this society has
                grown to become a family with more than 50 members.
              </p>
            </div>
          </div>

          <div className="w-full md:w-4/5 h-auto px-8 py-4 sm:p-8 flex flex-col-reverse sm:flex-row justify-center items-center">
            <div className="w-full sm:w-[45%] h-auto text-base md:text-lg text-left text-white my-6 mx-6">
              <p className="text-tertiary text-2xl md:text-3xl lg:text-4xl font-bold my-2">
                Motive
              </p>
              <p>
                The Society was founded with a main motive to promote concepts
                of <b>Game Theory</b> and
                <b>Strategic Thinking</b>. Many situations in people&apos;s lives
                make them choose between different options and we always intend
                to optimize our chances and get the best outcome. This is where
                Game Theory comes into play. The outcomes decided by the
                situations provoke us to analyze them statistically and hence
                choose the optimal solution through various methods and
                statistics. This society promotes these concepts by various
                means.
              </p>
            </div>
            <div className="w-full sm:w-[55%] h-auto object-cover overflow-hidden">
              <img
                src="/images/fullteam.jpg"
                alt="Image 1"
                className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:filter hover:grayscale hover:contrast-125"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center mt-20">
            <h1 className="text-3xl sm:text-5xl mt-5 text-center font-bold text-primary">
              Our Activities
            </h1>
          </div>
          <div className="mx-6 flex flex-col justify-start items-center">
            <div className="flex w-full flex-col sm:flex-row sm:justify-between justify-center items-center sm:items-start">
              <div className="w-4/5 mt-4 sm:w-[40%] h-auto flex flex-col items-center">
                <PiStrategyBold className="text-white w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                <b className="text-white">THE ART OF STRATEGY PROJECT</b>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:w-[300px] md:w-[370px] lg:w-[480px] text-tertiary mb-6 text-center">
                  This project is started under the advice of Prof. Avinash
                  Dixit, emeritus professor of Princeton University. Society
                  members undergo this self-learning program throughout the year
                  to develop their strategic thinking skills. The Society also
                  makes original questions based on strategic decision-making to
                  compile it as a question bank.
                  <br />
                </p>
              </div>
              <div className="w-4/5 mt-4 sm:w-[40%] h-auto flex flex-col items-center">
                <GoCommentDiscussion className="text-white w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                <b className="text-white">DISCUSSION SESSIONS</b>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:w-[300px] md:w-[370px] lg:w-[480px]  text-tertiary mb-6 text-center">
                  In discussion sessions, senior members conduct discussion
                  sessions for all the members, explaining the various
                  theoretical concepts, along with interesting games and
                  real-life examples.
                  <br />
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col sm:flex-row sm:justify-between justify-center items-center sm:items-start">
              <div className="w-4/5 mt-4 sm:w-[40%] h-auto flex flex-col items-center">
                <FaBookOpen className="text-white w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                <b className="text-white">CASE STUDIES</b>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:w-[300px] md:w-[370px] lg:w-[480px]  text-tertiary mb-6 text-center">
                  Society members practice solving case studies using game
                  theory in our academic meetings. Senior members solve real
                  life case studies in the fields of business and economics.
                  <br />
                </p>
              </div>
              <div className="w-4/5 mt-4 sm:w-[40%] h-auto flex flex-col items-center">
                <FaGamepad className="text-white w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />
                <b className="text-white">GAMES</b>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:w-[300px] md:w-[370px] lg:w-[480px]  text-tertiary mb-6 text-center">
                  In society meetings, members play strategy-based games among
                  themselves to learn how to use game theory concepts in a given
                  situation. The games are usually in accordance with the
                  concepts being covered during discussion sessions.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
