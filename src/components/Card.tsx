// src/components/Card.tsx
import React from 'react';

type CardProps = {
  card: {
    id: number;
    image: string;
    title: string;
  };
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      className="cursor-pointer max-w-80 flex flex-col items-center p-5 bg-transparent delay-50 hover:-translate-y-1 shadow-xl hover:shadow-violet-800 transition"
      onClick={onClick}
    >
      <img
        src={card.image}
        alt={card.title}
        className=" h-40 w-60 object-fill rounded-lg mb-4 border-2"
      />
      <h3 className="text-secondary text-3xl font-medium text-center">{card.title}</h3>
    </div>
  );
};

export default Card;
