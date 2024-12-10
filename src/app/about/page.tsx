"use client"
import React from "react";
import "../output.css";
import DotBackground from "@/components/DotBackground";

export default function About() {
  return (
    <div>
      <DotBackground/>
      <div className="min-h-screen flex flex-col items-center justify-around  text-white my-12">
        <div className="relative z-10 w-full sm:w-4/5 h-full">
          <div className="px-8 py-4 sm:p-8 flex flex-col justify-center items-center h-full w-full">
            <div className="text-center">
              <h1 className="text-5xl font-bold mt-4 mb-1 sm:mb-6 bg-gradient-to-b from-secondary to-primary inline-block text-transparent bg-clip-text">
                About KGTS
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-400 my-6 text-center">
              <b>The KGPian Game Theory Society</b>, abbreviated as <b>KGTS</b>,
              is IIT Kharagpur’s game theory organisation. It is a dynamic and
              intellectually stimulating community for students passionate about
              the study and application of game theory. It had organised various
              game theory-related events like Nashify, War of Wits, Brethren of
              the Coast and Finance Talk in previous years, designed to promote
              a culture of game theory on the campus. The Society’s flagship
              event is Stratathon, a mind-intriguing strategy case competition
              featured in Kshitij, the Techno-Management fest of{" "}
              <b>IIT Kharagpur</b>, every year.
            </p>
            <div className="overflow-hidden w-11/12 rounded-lg shadow-lg pb-4">
              <img
                src="/images/heads.jpg"
                alt="Image 1"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 hover:filter hover:grayscale hover:contrast-125"
              />
            </div>
          </div>
          <div className="px-8 py-4 sm:p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-1 sm:mb-6 bg-gradient-to-b from-secondary to-primary inline-block text-transparent bg-clip-text">
                Our History
              </h1>
            </div>
            <p className="text-base md:text-lg text-center  text-gray-400 my-6">
              <b className="text-white">FOUNDING</b>
              <br />
              <b>The KGPian Game Theory Society</b> was founded on{" "}
              <b>19th August 2010</b> by <b>Manoj Gadia</b>. It is a student
              body which organizes various Game Theory related programs. With a
              motive of spreading awareness, knowledge and application of Game
              Theory, first official session of society was 15th June 2011 to
              14th June 2012. Since then the society has seen tremendous growth
              over the years and witnessed good response from students and game
              theory enthusiasts. By the able guidance and vision of it's
              founder Manoj Gadia, this society has grown to become a family
              with more than 50 members.
              <br />
              <br />
              <b className="text-white">MOTIVE</b>
              <br />
              The Society was founded with a main motive to promote concepts of{" "}
              <b>Game Theory</b> and <b>Strategic Thinking</b>. Many situations
              in people's lives make them choose between different options and
              we always intend to optimize our chances and get the best outcome.
              This is where Game Theory comes into play. The outcomes decided by
              the situations provoke us to analyze them statistically and hence
              choose the optimal solution through various methods and
              statistics. This society promotes these concepts by various means.
            </p>
          </div>
          <div className="px-8 py-4 sm:p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-1 sm:mb-6 bg-gradient-to-b from-secondary to-primary inline-block text-transparent bg-clip-text">
                Highlights
              </h1>
            </div>
            <p className="text-base md:text-lg  text-gray-400 my-6 text-center">
              <b className="text-white">THE ART OF STRATEGY PROJECT</b>
              <br />
              This project is started under the advice of Prof. Avinash Dixit,
              emeritus professor of Princeton University. Society members
              undergo this self-learning program throughout the year to develop
              their strategic thinking skills. The Society also makes original
              questions based on strategic decision-making to compile it as a
              question bank.
              <br />
              <br />
              <b className="text-white">DISCUSSION SESSIONS</b>
              <br />
              In discussion sessions, senior members conduct discussion sessions
              for all the members, explaining the various theoretical concepts,
              along with interesting games and real-life examples.
              <br />
              <br />
              <b className="text-white">CASE STUDIES</b>
              <br />
              Society members practice solving case studies using game theory in
              our academic meetings. Senior members solve real life case studies
              in the fields of business and economics.
              <br />
              <br />
              <b className="text-white">GAMES</b>
              <br />
              In society meetings, members play strategy-based games among
              themselves to learn how to use game theory concepts in a given
              situation. The games are usually in accordance with the concepts
              being covered during discussion sessions.
              <br />
            </p>
            <div className="overflow-hidden w-11/12 rounded-lg shadow-lg">
              <img
                src="/images/fullteam.jpg"
                alt="Image 1"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 hover:filter hover:grayscale hover:contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
