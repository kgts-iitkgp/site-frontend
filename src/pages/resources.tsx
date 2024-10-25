import { useState } from 'react';
import Modal from '../components/Modal';
import FieldContainer from '@/components/FieldContainer';
import "../app/globals.css";


type CardData = {
  id: number;
  image: string;
  title: string;
};
type CategoryData = {
  category: string;
  cards: CardData[];
};

const resourcesData: CategoryData[] = [
  {
    category: 'Game Theory in Economics',
    cards: [
      { id: 1, image: '/images/eco1.png', title: 'Economics scenario x' },
      { id: 2, image:'/images/eco2.png', title: 'Economics scenario y' },
      { id: 5, image: '/images/eco3.png', title: 'Economics scenario z' },
    ],
  },
  {
    category: 'Game Theory in Geopolitics',
    cards: [
      { id: 3, image: '/images/gp1.png', title: 'Geopolitics scenario x' },
      { id: 4, image: '/images/gp2.png', title: 'Geopolitics scenario y' },
      { id: 6, image:'/images/gp3.png', title: 'Geopolitics scenario z' },
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
    <div className="p-5 text-primary max-w-screen">
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
