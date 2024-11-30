import { link } from "fs";
import React from "react";

type ModalCardLinks = {
  link_card: {
    link: string;
    link_title: string;
    description: string;
  };
};
const LinkCard: React.FC<ModalCardLinks> = ({ link_card }) => {
  return (
    <li>
      <a
        href={link_card.link}
        target="_blank"
        className="text-blue-600 hover:text-blue-800 font-medium block"
      >
        {link_card.link_title}
      </a>
    </li>
  );
};

export default LinkCard;
