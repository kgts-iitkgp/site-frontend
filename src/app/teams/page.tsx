"use client";
import DotBackground from "@/components/DotBackground";
import { TeamCard } from "@/components/TeamCard";
import { President } from "@/data/TeamsData";
import { VicePresident } from "@/data/TeamsData";
import { Advisors } from "@/data/TeamsData";
import { Heads } from "@/data/TeamsData";
//import { Strategists } from "@/data/TeamsData";
function Teams() {
  return (
    <div className="min-h-screen">
      <DotBackground />
      <div>
        <div>
          <p className="text-3xl sm:text-5xl mb-5 mt-20 font-bold text-primary text-center">
            Our Team
          </p>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            President
          </p>
          <div className="grid grid-cols-1 place-items-center items-stretch gap-6 lg:gap-6 my-8">
            {President.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            Vice President
          </p>
          <div className="grid grid-cols-1 place-items-center items-stretch gap-6 lg:gap-6 my-8">
            {VicePresident.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            Advisors
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  items-stretch gap-6 lg:gap-6 my-8">
            {Advisors.map((data, index) => (
              <TeamCard key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <p className="text-3xl mb-5 mt-12 font-bold text-primary text-center">
            Heads
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-6 my-8">
            {Heads.map((data, index) => (
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
