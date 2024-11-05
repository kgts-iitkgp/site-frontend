import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
    id: String;
    title: string;
    author: string;
    date: string;
    content: string;
    image: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({ id, title, author, date, content, image }) => {
    return (
        <Link href={`/${id}`}>
            <div className="relative max-w-xs bg-cardbg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-accent1/50 border-2 border-accent2 w-full max-w-[350px] lg:max-w-[400px] mx-auto ">


                <div className="p-4 bg-cardbg overflow-hidden">
                    <Image src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-105 hover:rotate-1" />
                </div>
                <div className="p-6 bg-cardbg text-white shadow-inner pb-10">
                    <h2 className="text-2xl font-extrabold text-accent1 mb-2 hover:text-accent2 transition-colors duration-300 ease-in-out">
                        {title}
                    </h2>
                    <p className="text-s font-medium text-accent2 italic mb-4">
                        {author} • {date}
                    </p>
                    <p className="text-base text-white hover:text-gray-100 transition-all duration-300 ease-in-out">
                        {content.slice(0, 80)}...
                    </p>
                </div>

                <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-full text-center text-white p-4">

                        <span className="absolute bottom-2 text-accent1 font-semibold text-lg cursor-pointer transition-all duration-300 ease-in-out hover:text-accent2 hover:underline transform hover:scale-105">
                            Read More
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
