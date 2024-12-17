"use client";
import { useState } from "react";
import { Event } from "../../data/types";
import EventCard from "../../components/EventsCard";
import Popup from "../../components/Popup";
import { Past } from "../../data/PastEvents";
import { Upcoming } from "../../data/UpcomingEvents";
import { Ongoing } from "../../data/OngoingEvents";
import DotBackground from "../../components/DotBackground";
import "../globals.css";
import React from "react";
import { useEffect } from "react";
const Events = () => {
  const [popupEvent, setPopupEvent] = useState<Event | null>(null);
  const[ongoing, setOngoing]=useState(true);
  const[upcoming, setUpcoming]=useState(false);
  const[past, setPast]=useState(false);
  
  useEffect(() => {
    if (Ongoing.length === 0 && Upcoming.length === 0) {
      setOngoing(false);
      setPast(true);
    } else if (Ongoing.length === 0) {
      setOngoing(false);
      setUpcoming(true);
    }
  }, []);


  const openPopup = (event: Event) => {
    setPopupEvent(event);
  };

  const closePopup = () => {
    setPopupEvent(null);
  };

  return (
    <div className="w-screen min-h-screen">
      <DotBackground />
      <div className="flex justify-center">
        <div className=" md:w-[700px] lg:w-[900px] ">
          <div className=" py-8 px-4">
            <div>
              <p className="text-3xl sm:text-5xl mb-5 mt-12 font-bold text-primary text-center">
                Events
              </p>
            </div>
            <div className="flex space-x-2 text-xl">
              <p
                className={`bg-black px-4 py-1 rounded-full border border-primary cursor-pointer transition-all duration-200 ${
                  ongoing ? "bg-primary/50" : ""
                } active:scale-90`}
                onClick={() => {
                  setOngoing(true);
                  setUpcoming(false);
                  setPast(false);
                }}
              >
                Ongoing
              </p>
              <p
                className={`bg-black px-4 py-1 rounded-full border border-primary cursor-pointer transition-all duration-200 ${
                  upcoming ? "bg-primary/50" : ""
                } active:scale-90`}
                onClick={() => {
                  setOngoing(false);
                  setUpcoming(true);
                  setPast(false);
                }}
              >
                Upcoming
              </p>
              <p
                className={`bg-black px-4 py-1 rounded-full border border-primary cursor-pointer transition-all duration-200 ${
                  past ? "bg-primary/50" : ""
                } active:scale-90`}
                onClick={() => {
                  setOngoing(false);
                  setUpcoming(false);
                  setPast(true);
                }}
              >
                Past
              </p>
            </div>
            {Ongoing.length > 0 && ongoing ? (
              <section className="my-8">
                <div className="flex flex-col space-y-8  w-full justify-center">
                  {Ongoing.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      type="ongoing"
                      openPopup={openPopup}
                    />
                  ))}
                </div>
              </section>
            ) : (ongoing? (<section className="my-8">
              <div className="flex items-center w-full justify-center text-tertiary sm:text-xl">
                No ongoing events
              </div>
            </section>):null)}

            {Upcoming.length > 0 && upcoming ? (
              <section className="my-8">
                <div className="content-none h-[3px] w-80 text-white flex justify-center"></div>
                <div className="flex flex-col space-y-8  w-full justify-center">
                  {Upcoming.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      type="upcoming"
                      openPopup={openPopup}
                    />
                  ))}
                </div>
              </section>
            ) : (upcoming? (<section className="my-8">
              <div className="flex items-center w-full justify-center text-tertiary sm:text-xl">
                No upcoming events
              </div>
            </section>):null)}

            {Past.length > 0 && past ? (
              <section className="my-8">
                <div className="flex flex-col space-y-8 w-full justify-center">
                  {Past.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      type="past"
                      openPopup={openPopup}
                    />
                  ))}
                </div>
              </section>
            ) : (past? (<section className="my-8">
              <div className="flex items-center w-full justify-center text-tertiary sm:text-xl">
                No past events
              </div>
            </section>):null)}

            {popupEvent && <Popup event={popupEvent} closePopup={closePopup} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
