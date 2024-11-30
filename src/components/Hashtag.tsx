import React from "react";

type Tag = {
  tag: string;
};

const HashTag: React.FC<Tag> = ({ tag }) => {
  return (
    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
    {tag}
  </span>
  );
};

export default HashTag;
