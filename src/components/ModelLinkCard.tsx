import React from "react";

type ModalCardLinks = {
  link_card: {
    link: string;
    link_title: string;
    description: string;
  };
};
const ModelLinkCard: React.FC<ModalCardLinks> = ({ link_card }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
      <a
        href={link_card.link}
        target="_blank"
        className="text-blue-600 font-medium hover:text-blue-800 text-lg"
      >
        {link_card.link_title}
      </a>
      <p className="text-gray-600 text-sm mt-1">{link_card.description}</p>
    </div>
  );
};

export default ModelLinkCard;
