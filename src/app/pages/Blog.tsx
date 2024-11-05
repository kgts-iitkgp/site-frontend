import React from 'react';
import { BlogCard } from './BlogCard';
import Image from 'next/image';
import demoimg from "/public/demo.jpg"

const BlogPage = () => {
  const blogs = [
    { id: "1",
      title: "Exploring Next.js and TypeScript",
      author: "AJ Dey",
      date: "October 26, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione suscipit eius obcaecati alias molestiae qui fuga, esse consequuntur quibusdam veritatis porro, autem quas ea et ad ullam? Minima, sequi.",
      image: demoimg,
    },
    // Add more blogs 

    { id: "2",
      title: "Exploring Next.js and TypeScript",
      author: "AJ Dey",
      date: "October 26, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione suscipit eius obcaecati alias molestiae qui fuga, esse consequuntur quibusdam veritatis porro, autem quas ea et ad ullam? Minima, sequi.",
      image: demoimg,
    },

    { id: "3",
      title: "Exploring Next.js and TypeScript",
      author: "AJ Dey",
      date: "October 26, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione suscipit eius obcaecati alias molestiae qui fuga, esse consequuntur quibusdam veritatis porro, autem quas ea et ad ullam? Minima, sequi.",
      image: demoimg,
    },

    { id: "4",
      title: "Exploring Next.js and TypeScript",
      author: "AJ Dey",
      date: "October 26, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione suscipit eius obcaecati alias molestiae qui fuga, esse consequuntur quibusdam veritatis porro, autem quas ea et ad ullam? Minima, sequi.",
      image: demoimg,
    },

    { id: "5",
      title: "Exploring Next.js and TypeScript",
      author: "AJ Dey",
      date: "October 26, 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione suscipit eius obcaecati alias molestiae qui fuga, esse consequuntur quibusdam veritatis porro, autem quas ea et ad ullam? Minima, sequi.",
      image: demoimg,
    },


  ];

  return (
    <div className="bg-primaryBg min-h-screen py-10 px-4">
      <h1 className="text-center text-4xl font-bold text-accent1 mb-10">Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
