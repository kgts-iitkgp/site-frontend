"use client";

import { useState,useEffect } from 'react';
import { Event} from './types';
import EventCard from './components/EventsCard';
import Popup from './components/Popup';
import { Past } from './PastEvents';
import { Upcoming } from './UpcomingEvents';
import { Ongoing } from './OngoingEvents';
import "./globals.css"



const Home = () => {
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
    <div className="p-10"> 
      {
        Ongoing.length>0? (
        <section>
          <h2 className={`text-2xl font-semibold mb-8 uppercase  text-primaryColor flex justify-center transition duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Ongoing Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full justify-items-center">
            {Ongoing.map(event => (
              <EventCard key={event.id} event={event} type="ongoing" openPopup={openPopup} />
            ))}
          </div>
        </section>
        ) :
        null
      }

      {
        Upcoming.length>0 ?(
          <section className="mt-8">
            <h2 className={`text-2xl font-semibold mb-8 uppercase text-primaryColor flex justify-center transition duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Upcoming Events</h2>
            <div className='content-none h-[3px] w-80 text-white flex justify-center'></div>
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  max-w-screen-xl w-full justify-items-center">
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
            <h2 className={`text-2xl font-semibold mb-8 uppercase  text-primaryColor flex justify-center transition duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Past Events</h2>
            <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 justify-items-center sm:justify-items-stretch">
              {Past.map(event => (
                <EventCard key={event.id} event={event} type="past" openPopup={openPopup} />
              ))}
            </div>
          </section>
        ) : null
      }

     

      {popupEvent && <Popup event={popupEvent} closePopup={closePopup} />}
    </div>
  );
};

export default Home;
