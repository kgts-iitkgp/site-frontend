import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Event } from '../data/types';
import Image from 'next/image';

interface PopupProps {
  event: Event;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ event, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ">
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg mx-12 max-h-[80vh] overflow-y-auto">
        <FontAwesomeIcon icon={faXmark} className='text-tertiary cursor-pointer' onClick={closePopup}/>
        <h2 className="sm:text-3xl font-bold mb-2 text-primary mt-4 flex justify-center uppercase text-xl">{event.title}</h2>
        <p className='mt-5 text-white sm:text-lg text-sm'>{event.description}</p>
        <p className='uppercase font-bold mt-4 mb-4 text-tertiary text-xl'>Gallery</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {event.images && event.images.map((images,index)=>(
            <Image src={images} alt={`${event.title} image ${index + 1}`}  key={index} className="w-full h-full object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
