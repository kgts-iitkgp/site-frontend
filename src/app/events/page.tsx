"use client";
import { useState,useEffect } from 'react';
import { Event} from '../../data/types';
import EventCard from '../../components/EventsCard';
import Popup from '../../components/Popup';
import { Past } from '../../data/PastEvents';
import { Upcoming } from '../../data/UpcomingEvents';
import { Ongoing } from '../../data/OngoingEvents';
import DotBackground from "../../components/DotBackground";
import "../globals.css"
import React from 'react';

const Events = () => {
  const [popupEvent, setPopupEvent] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openPopup = (event: Event) => {
    setPopupEvent(event);
  };

  const closePopup = () => {
    setPopupEvent(null);
  };

  return (
    
    <div>
      <DotBackground />
      <div className="py-8 px-14"> 
      {
        Ongoing.length>0?(
          
          <section>
            <div className='flex '>
              {/* <h2 className={`text-4xl font-bold mb-8 mt-8 uppercase text-primaryColor transition duration-500 font-title ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >Ongoing Events</h2> */}
               <p className="font-com text-3xl sm:text-5xl mb-5 mt-12 font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary ">
               Ongoing Events
            </p>
            </div>
            <div className="flex flex-col space-y-8  w-full justify-center">
              {Ongoing.map(event => (
                <EventCard key={event.id} event={event} type="ongoing" openPopup={openPopup} />
              ))}
            </div>
          </section>
        ):
        null}

      {
        Upcoming.length>0 ?(
          <section className="mt-8">
            <div className=''>
              {/* <h2 className={`text-4xl font-bold mb-8 uppercase  text-primaryColor  transition duration-500 font-title ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Upcoming Events</h2>   */}
              <p className="font-com text-3xl sm:text-5xl my-5  font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary ">
                Upcoming Events
            </p>
            </div>            
            <div className='content-none h-[3px] w-80 text-white flex justify-center'></div>
              <div className="flex flex-col space-y-8  w-full justify-center">
              {Upcoming.map(event => (
              <EventCard key={event.id} event={event} type="upcoming" openPopup={openPopup} />
            ))}
              </div>
          </section>
        ) : null
      }

      {
        Past.length>0? (
          <section className="mt-8">
            <div className=''>
              {/* <h2 className={`text-4xl font-bold mb-8 uppercase text-primaryColor transition duration-500 font-title ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Past Events</h2> */}
              <p className="font-com text-3xl sm:text-5xl my-5  font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary ">
              Past Events
            </p>
            </div>            
            <div className="flex flex-col space-y-8 w-full justify-center">
              {Past.map(event => (
                <EventCard key={event.id} event={event} type="past" openPopup={openPopup} />
              ))}
            </div>
          </section>
        ) : null
      }

      {popupEvent && <Popup event={popupEvent} closePopup={closePopup} />}
    </div>
  
    </div>
  );
};

export default Events;
