"use client";
import DotBackground from "@/components/DotBackground";
import { TeamCard } from "@/components/TeamCard";
import { President } from "@/data/TeamsData";
import { VicePresident } from "@/data/TeamsData";
import { Advisors } from "@/data/TeamsData";
import { AcademicHeads, EventsHeads, GeneralSecretaries, TechHeads, DesignHeads, PublicityHeads } from "@/data/TeamsData";
import { useState, useEffect } from "react";
//import { Strategists } from "@/data/TeamsData";
function Teams() {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => setIsLgScreen(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Listen for changes
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <div className="min-h-screen">
      <DotBackground />
      <div>
        <div>
          <p className="text-3xl sm:text-5xl mb-3 mt-20 font-bold text-primary text-center">
            Our Team
          </p>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-4 mt-6 font-bold text-primary text-center">
            Advisors
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6 lg:gap-6 mb-8 mt-4">
            {President.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
            {VicePresident.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-6 my-8">
            {Advisors.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            Heads
          </p>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-6 my-8"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6 lg:gap-6 my-8">
            {AcademicHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-6 my-8">
            {DesignHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
          {isLgScreen && <div className="grid grid-cols-3 items-stretch gap-6 lg:gap-6 my-8">
            {EventsHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
            {PublicityHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>}
          {!isLgScreen && <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6 lg:gap-6 my-8">
            {EventsHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>}
          {!isLgScreen && <div className="grid grid-cols-1 items-stretch gap-6 lg:gap-6 my-8">
            {PublicityHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6 lg:gap-6 my-8">
            {GeneralSecretaries.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6 lg:gap-6 my-8">
            {TechHeads.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div>
        {/* <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            Strategists
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-6 lg:gap-6 my-8">
            {Strategists.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Teams;
