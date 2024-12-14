import { Event } from "../data/types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import useOnScreen from "../app/hooks/UseOnScreen";
import { Button } from "./MovingBorder";

interface EventCardProps {
  event: Event;
  type: "ongoing" | "upcoming" | "past";
  openPopup: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, type, openPopup }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(cardRef);

  return (
    <div
      ref={cardRef}
      className={`h-[450px] sm:h-[250px] flex justify-center mb-8  transition-transform duration-1000 ease-in-out${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <div className="flex flex-col sm:flex-row border-secondary border-opacity-90 border-2 rounded-lg shadow-lg overflow-hidden w-[300px] sm:w-[600px] md:w-[700px]">
        {/* Image Section */}
        <div className="h-[250px] sm:h-full w-full sm:w-1/2 relative ">
          <Image
            src={event.image ?? ""}
            alt={event.title}
            className="object-cover w-full h-full"
            fill
          />
          <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-l before:from-black before:to-transparent before:opacity-50" />
        </div>

        {/* Content Section */}
        <div className="p-4 w-full h-[200px] sm:h-full lg:w-1/2 flex flex-col justify-between bg-black">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary uppercase">
              {event.title}
            </h3>
            <p className="text-sm lg:text-base text-textColor   ">
              {event.description}
            </p>
          </div>

          {type === "upcoming" && (
            <div className="text-tertiary   ">
              Time : {event.month} (Tentatively)
            </div>
          )}

          {type === "past" && (
            <div className="text-xs lg:text-sm text-secondaryColor mt-2   ">
              <p className="mb-1">Venue: {event.venue}</p>
              <p>Time: {event.startDate}</p>
              <div className="mt-1 flex justify-center">
                <Button
                  borderRadius="1.75rem"
                  containerClassName="w-[100px] h-[35px] mx-4 my-2"
                  className="bg-black"
                  onClick={() => openPopup(event)}
                >
                  {/* <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="mr-2 hover:animate-wiggle transition duration-200"
                    /> */}
                  Details
                </Button>
              </div>
            </div>
          )}

          {/* Register Button for Ongoing Events */}
          {type === "ongoing" && (
            <div className="mt-1 flex justify-center">
              <Button
                borderRadius="1.75rem"
                containerClassName="w-[100px] h-[35px] mx-4 my-2"
                className="bg-black"
              >
                <a href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm">
                  Register
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
