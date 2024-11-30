import { useState } from "react";
import Modal from "../components/Modal";
import FieldContainer from "@/components/FieldContainer";
import "../app/globals.css";

type Links = {
  link: string;
  link_title: string;
  description: string;
};
type CardData = {
  id: number;
  image: string;
  title: string;
  links: Links[];
  hashtags: { tag: string }[];
};
type CategoryData = {
  category: string;
  cards: CardData[];
};

const resourcesData: CategoryData[] = [
  {
    category: "Game Theory in Business",
    cards: [
      {
        id: 7,
        image: "/images/eco1.png",
        title: "Business scenario x",
        links: [
          {
            link: "link business 1",
            link_title: "Business link title 1",
            description: "This is a description for business link 1",
          },
          {
            link: "link business 2",
            link_title: "Business link title 2",
            description: "This is a description for business link 2",
          },
          {
            link: "link business 3",
            link_title: "Business link title 3",
            description: "This is a description for business link 3",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
      {
        id: 8,
        image: "/images/eco2.png",
        title: "Business scenario y",
        links: [
          {
            link: "link business 4",
            link_title: "Business link title 4",
            description: "This is a description for business link 4",
          },
          {
            link: "link business 5",
            link_title: "Business link title 5",
            description: "This is a description for business link 5",
          },
          {
            link: "link business 6",
            link_title: "Business link title 6",
            description: "This is a description for business link 6",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
      {
        id: 9,
        image: "/images/eco3.png",
        title: "Business scenario z",
        links: [
          {
            link: "link business 7",
            link_title: "Business link title 7",
            description: "This is a description for business link 7",
          },
          {
            link: "link business 8",
            link_title: "Business link title 8",
            description: "This is a description for business link 8",
          },
          {
            link: "link business 9",
            link_title: "Business link title 9",
            description: "This is a description for business link 9",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
    ],
  },
  {
    category: "Game Theory in Sports",
    cards: [
      {
        id: 10,
        image: "/images/gp1.png",
        title: "Sports scenario x",
        links: [
          {
            link: "link sports 1",
            link_title: "Sports link title 1",
            description: "This is a description for sports link 1",
          },
          {
            link: "link sports 2",
            link_title: "Sports link title 2",
            description: "This is a description for sports link 2",
          },
          {
            link: "link sports 3",
            link_title: "Sports link title 3",
            description: "This is a description for sports link 3",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
      {
        id: 11,
        image: "/images/gp2.png",
        title: "Sports scenario y",
        links: [
          {
            link: "link sports 4",
            link_title: "Sports link title 4",
            description: "This is a description for sports link 4",
          },
          {
            link: "link sports 5",
            link_title: "Sports link title 5",
            description: "This is a description for sports link 5",
          },
          {
            link: "link sports 6",
            link_title: "Sports link title 6",
            description: "This is a description for sports link 6",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
      {
        id: 12,
        image: "/images/gp3.png",
        title: "Sports scenario z",
        links: [
          {
            link: "link sports 7",
            link_title: "Sports link title 7",
            description: "This is a description for sports link 7",
          },
          {
            link: "link sports 8",
            link_title: "Sports link title 8",
            description: "This is a description for sports link 8",
          },
          {
            link: "link sports 9",
            link_title: "Sports link title 9",
            description: "This is a description for sports link 9",
          },
        ],
        hashtags: [
          { tag: "#businessTag1" },
          { tag: "#businessTag2" },
          { tag: "#businessTag3" },
        ],
      },
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
        <FieldContainer
          key={container.category}
          container={container}
          onCardClick={openModal}
        />
      ))}
      {selectedCard && <Modal card={selectedCard} onClose={closeModal}></Modal>}
    </div>
  );
};

export default Resources;
