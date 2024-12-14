import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: StaticImageData;
  link: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({ id, title, author, date, content, image, link }) => {
  return (
    <Link href={`${link}`}>
      <div className="relative max-w-[300px] bg-cardbg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-accent1/50 border-2 border-accent2 w-full mx-auto rounded-lg hover:-translate-y-2 h-full flex flex-col">
        <div className="p-4 bg-cardbg overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-500 transform hover:scale-105 rounded"
          />
        </div>
        <div className="p-3 bg-cardbg text-white shadow-inner">
          <h2 className="text-lg font-extrabold text-accent1 mb-2 hover:text-accent2 transition-colors duration-300 ease-in-out">
            {title}
          </h2>
          <p className="text-sm font-medium text-accent2 italic mb-2">
            {author} • {date}
          </p>
          <p className="text-sm text-white hover:text-gray-100 transition-all duration-300 ease-in-out">
            {content.slice(0, 60)}...
          </p>
        </div>

        <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-300">
          <div className="flex items-center justify-center h-full text-center text-white p-4">
          </div>
        </div>
      </div>
    </Link>
  );
};
