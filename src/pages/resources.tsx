import { useState } from 'react';
import Modal from '../components/Modal';
import FieldContainer from '@/components/FieldContainer';
import "../app/globals.css";

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
type CategoryData = {
  category: string;
  cards: CardData[];
};

const resourcesData: CategoryData[] = [
  {
    category: 'Game Theory in Economics',
    cards: [
      { id: 1, image: '/images/eco1.png', title: 'Economics scenario x',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]      },
      { id: 2, image:'/images/eco2.png', title: 'Economics scenario y',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]       },
      { id: 5, image: '/images/eco3.png', title: 'Economics scenario z',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]
       },
    ],
  },
  {
    category: 'Game Theory in Geopolitics',
    cards: [
      { id: 3, image: '/images/gp1.png', title: 'Geopolitics scenario x',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]       },
      { id: 4, image: '/images/gp2.png', title: 'Geopolitics scenario y',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]       },
      { id: 6, image:'/images/gp3.png', title: 'Geopolitics scenario z',
        links:[{link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"},
          {link:"link one 1",link_title:"link title"}]       },
    ],
  },
];

const Resources = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const openModal = (card: CardData) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="p-5 max-w-screen">
      {resourcesData.map((container) => (
        <FieldContainer key={container.category} container={container} onCardClick={openModal} />
      ))}
      {selectedCard && (
        <Modal card={selectedCard} onClose={closeModal}></Modal>
      )}
    </div>
  );
};

export default Resources;
