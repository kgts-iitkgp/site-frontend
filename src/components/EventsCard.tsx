import { Event } from '../data/types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import useOnScreen from '../app/hooks/UseOnScreen';

interface EventCardProps {
  event: Event;
  type: 'ongoing' | 'upcoming' | 'past';
  openPopup: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, type, openPopup }) => {

  const cardRef = useRef<HTMLDivElement>(null); 
  const isVisible = useOnScreen(cardRef); 

  return (
    <div 
    ref={cardRef}
    className={`flex justify-center mb-8  transition-transform duration-1000 ease-in-out${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    }`}
    >
      <div className="flex flex-col sm:flex-row border-secondary border-opacity-90 border-2 rounded-lg shadow-lg overflow-hidden w-full">
        {/* Image Section */}
        <div className="sm:w-1/2 sm:h-full w-full h-56 relative ">
          <Image 
            src={event.image ?? ""}
            alt={event.title}
            className="object-cover w-full h-full"
            fill
          />
          <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-l before:from-black before:to-transparent before:opacity-50" />
        </div>

        {/* Content Section */}
        <div className="p-6 w-full lg:w-1/2 flex flex-col justify-between bg-black">
          <h3 className="text-xl lg:text-2xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary uppercase font-com">
            {event.title}
          </h3>
          <p className="text-sm lg:text-base text-textColor mb-4 font-description">
            {event.description}
          </p>

          {type=== 'upcoming' &&(
            <div className='text-tertiary font-description'>
              Time : {event.month} (Tentatively)
            </div>
          )
          }


          {type === 'past' && (
            <div className="text-xs lg:text-sm text-secondaryColor mt-2 font-description">
              <p className="mb-1">Venue: {event.venue}</p>
              <p>Time: {event.startDate}</p>
              <div className="mt-4">
              <button 
                onClick={() => openPopup(event)} 
                className="flex items-center text-textColor border-2 border-accentColor py-2 px-4 rounded-lg font-semibold  hover:shadow-glow transition duration-500 font-description"
              >
              <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2 hover:animate-wiggle transition duration-200" />
              Details
            </button>
          </div>
            </div>
            
          )}

          {/* Register Button for Ongoing Events */}
          {type === 'ongoing' && (
            <div className="mt-4">
              <a 
                href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm"
                className=" text-textColor border-accentColor border-2 py-2 px-4 rounded-lg uppercase font-semibold font-description transition duration-500 hover:shadow-glow  "
              >
                Register
              </a>
            </div>
          )}

      
        </div>
       
      </div>
    </div>
  );
};

export default EventCard;