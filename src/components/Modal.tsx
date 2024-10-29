
import React, { ReactNode } from 'react';
import UnderlinDesign from './UnderlinDesign';
import LinkCard from './LinkCard';

type Links={
  link:string;
  link_title:string;
}
type ModalProps = {
  card: {
    id: number;
    image: string;
    title: string;
    links: Links[];
  } | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ card, onClose}) => {
  if (!card) return null;

  return (
    <div className="overflow-scroll p-20 pt-32 bg-transBack fixed inset-0 flex items-center justify-center z-50">
      <div className="p-10 m-2 min-w-[80vw] bg-slate-200 rounded-lgrelative relative flex flex-col items-center justify-center rounded-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-accent1 text-2xl font-bold hover:text-opacity-50"
        >
          &times;
        </button>
        <h2 className="text-4xl text-accent1 font-medium mb-5 text-center font-Gvf">{card.title}</h2>
        <UnderlinDesign />
        <img
          src={card.image}
          alt={card.title}
          className=" h-52 w-68 object-fill rounded-lg mb-5 border-2"
        />
        <h3 className=" text-3xl font-medium text-center mb-3">Links</h3>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
       
       {card.links.map((link_card)=> <LinkCard link_card={link_card} key={link_card.link}/>)}

        </div>
      </div>
    </div>
  );
};

export default Modal;
