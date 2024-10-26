// components/EventCard.tsx
import { Event } from '../types';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

interface EventCardProps {
  event: Event;
  type: 'ongoing' | 'upcoming' | 'past';
  openPopup: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, type, openPopup }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const handleFlip = () => {
    setIsFlipped(prev => !prev);
    console.log(isFlipped)
  };

  return (
    <div className={`relative lg:w-[30vw] h-[50vh] w-[60vw] sm:w-[40vw] perspective preserve-3d transition duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className={`transform transition-transform duration-1000 ${isFlipped ? 'rotate-y-180' : ''} w-full h-full preserve-3d `} style={{ transformStyle: 'preserve-3d' }}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden border rounded-lg overflow-hidden">
          <Image src={event.image ?? ""} alt={event.title} className="object-cover rounded-md absolute shadow-lg -z-10" fill  />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-70 rounded-lg z-1 backface-hidden"
          style={{visibility: isFlipped? 'hidden' : 'visible'}}>
            <h3 className="lg:text-2xl font-com mb-12 backface-hidden uppercase tracking-space sm:text-xl">{event.title}</h3>
            <button
              className="bg-transparent border-white border-2 text-white px-6 py-0 rounded-lg backface-hidden uppercase font-semibold  h-[3em] tracking-widest leading-2.9
              hover:bg-white hover:text-secondaryColor transition duration-1000 hover:opacity-90"
              onClick={handleFlip}
            >
              Details
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md p-4 ${isFlipped ? '' : 'rotate-y-180'} border-secondaryColor border-3`}
        style={{ transform: 'rotateY(180deg)', top: 0, left: 0}}>
          <p className="mt-4 px-4 lg:text-sm sm:text-sm shadow-text-glow text-[#7564ef] text-xs">{event.description}</p>
          {type === 'past' && (
            <div className="mt-4 px-4 relative">
              <p className="lg:text-lg sm:text-sm text-secondaryColor text-xs">Venue: {event.venue}</p>
              <p className="lg:text-lg sm:text-sm text-secondaryColor inline text-xs">Time: {event.startDate}</p>
              <button
                className="bg-secondaryColor border-2 text-white lg:px-6 lg:py-0 rounded-lg backface-hidden uppercase font-semibold  lg:h-[3em] lg:tracking-widest lg:leading-2.9
                transition duration-1000 absolute lg:top-1 lg:right-1 py-3 px-1 text-xs right-0 top-0 sm:px-3"
                onClick={openPopup.bind(null, event)}
              >
                 Details
              </button>
            </div>
          )}
          {type === 'ongoing' && ( 
            <div className="mt-4 px-4">
              <a href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm"
              className="bg-transparent border-secondaryColor border-2 text-secondaryColor lg:px-6 lg:py-3 rounded-lg backface-hidden uppercase font-semibold  h-[3em] tracking-widest leading-2.9
              hover:bg-secondaryColor hover:text-white transition duration-1000 hover:opacity-90 text-xs lg:text-sm px-4 py-3">
                Register
              </a>
            </div>
          )}
          <div onClick={handleFlip} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer transition duration-1000">
            <div  className={`cursor-pointer transition duration-300 border-2 border-secondaryColor flex justify-center text-center hover:bg-secondaryColor ` }>
              <FontAwesomeIcon icon={faArrowLeftLong} className=" text-secondaryColor p-3 lg:text-xl  text-sm hover:text-white hover:animate-wiggle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
