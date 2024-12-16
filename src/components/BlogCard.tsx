import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  words: number;
  content: string;
  image: string;
  link: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, words, content, image, link }) => {
  return (
      <div className="relative cursor-default bg-black w-[300px] bg-cardbg shadow-md overflow-hidden transform transition-all duration-300 border-2 border-primary mx-auto rounded-2xl hover:-translate-y-2 h-full flex flex-col justify-center">
        <div className="p-3 bg-cardbg overflow-hidden">
          <Image
            src={`${image}`}
            alt={title}
            width={400}
            height={400}
            className="w-full h-40 object-cover rounded"
          />
        </div>
        
        <div className="p-3 bg-cardbg text-white shadow-inner">
          <h2 className="text-lg font-extrabold text-primary mb-1">
            {title}
          </h2>
          <p className="text-sm font-medium text-tertiary italic mb-1">
            {author} • {date}
          </p>
          <p className="text-sm text-white hover:text-gray-100 transition-all duration-300 ease-in-out mb-1">
            {content.slice(0, words)}...
          </p>
        </div>
        <Link href={`${link}`}>
          <div className="relative w-full flex flex-col justify-end z-10 h-10 my-2">
            <button className="px-5 py-2 hover:bg-tertiary rounded-full border-2 border-primary text-white focus:outline-none transition-all duration-300 self-center">
              Read more
            </button>
          </div>
        </Link>
      </div>
  );
};
