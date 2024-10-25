// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import UnderlinDesign from './UnderlinDesign';
import LinkCard from './LinkCard';

type ModalProps = {
  card: {
    id: number;
    image: string;
    title: string;
  } | null;
  onClose: () => void;
  children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ card, onClose, children }) => {
  if (!card) return null;

  return (
    <div className="overflow-scroll px-32 pt-20 fixed inset-0 bg-backgroundTrans flex items-center justify-center z-50">
      <div className="px-52 py-16 bg-zinc-200 p-6 rounded-lgrelative relative flex flex-col items-center justify-center ">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-primary text-2xl font-bold hover:text-opacity-50"
        >
          &times;
        </button>
        <h2 className="text-4xl font-medium mb-5 text-center font-Gvf">Economics scenario x</h2>
        <UnderlinDesign />
        <img
          src={card.image}
          alt={card.title}
          className=" h-52 w-68 object-fill rounded-lg mb-5 border-2"
        />
        <h3 className="text-secondary text-3xl font-medium text-center mb-3">Links</h3>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
        <LinkCard /><LinkCard /><LinkCard /><LinkCard />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
