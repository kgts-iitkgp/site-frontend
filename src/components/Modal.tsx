import React, { ReactNode } from "react";
import HashTag from "./Hashtag";
import ModelLinkCard from "./ModelLinkCard";

type Links = {
  link: string;
  link_title: string;
  description: string;
};

type Tags = {
  tag: string;
};

type ModalProps = {
  card: {
    id: number;
    image: string;
    title: string;
    links: Links[];
    hashtags: Tags[];
  } | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <>
      <div
        id="cardModal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white w-full max-w-4xl max-h-full rounded-lg shadow-lg overflow-y-auto relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="p-6 space-y-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {card.title}
            </h2>

            <img
              src={card.image}
              alt={card.title}
              className="w-100 h-48 rounded-lg shadow-md"
            />

            {card.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {card.hashtags.map((tag) => (
                  <HashTag tag={tag.tag} key={tag.tag} />
                ))}
              </div>
            )}

            {card.links.length > 0 && (
              <div className="space-y-4 w-full">
                {card.links.map((link_card) => (
                  <ModelLinkCard link_card={link_card} key={link_card.link} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
