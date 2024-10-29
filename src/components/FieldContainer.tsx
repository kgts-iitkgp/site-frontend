import React from 'react';
import Card from './Card';
import UnderlinDesign from './UnderlinDesign';

type Links={
  link:string;
  link_title:string;
}
type CardData = {
  id: number;
  image: string;
  title: string;
  links: Links[];
};

type FieldContainerProps = {
  container: {
    category: string;
    cards: CardData[];
  };
  onCardClick: (card: CardData) => void;
};

const FieldContainer: React.FC<FieldContainerProps> = ({ container, onCardClick }) => {
  return (
    <div className='w-full p-10 border-b-2 border-neutral-500'>
      <h2 className="text-4xl text-accent1 font-medium mb-5 text-center font-Gvf">{container.category}</h2>
      <UnderlinDesign />
      <div className="flex justify-evenly flex-wrap">
        {container.cards.map((card) => (
          <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
        ))}
      </div>
    </div>
  );
};

export default FieldContainer;
