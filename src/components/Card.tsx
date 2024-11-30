import React from "react";
import HashTag from "./Hashtag";
import LinkCard from "./LinkCard";

type CardProps = {
  card: {
    id: number;
    image: string;
    title: string;
    links: {
      link: string;
      link_title: string;
      description: string;
    }[];
    hashtags: {
      tag: string;
    }[];
  };
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      className="w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
      onClick={onClick}
    >
      <img
        className="w-full h-48 object-cover"
        src={card.image}
        alt={card.title}
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {card.title}
        </h2>

        {card.links.length > 0 && (
          <div className="bg-gray-100 rounded-lg p-3 mb-3 shadow-inner">
            <ul>
              {card.links.map((link_card) => (
                <LinkCard link_card={link_card} key={link_card.link} />
              ))}
            </ul>
          </div>
        )}
        {card.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {card.hashtags.map((tag) => (
              <HashTag tag={tag.tag} key={tag.tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
