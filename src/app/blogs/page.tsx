import React from 'react';
import { BlogCard } from '../../components/BlogCard';
//import Image from 'next/image';
import demoimg from "/public/images/demo.jpg"

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

// import { useRouter } from 'next/router';
// import Image from 'next/image';

// interface Blog {
//   id: string;
//   title: string;
//   image: string;
//   content: string;
//   author: string;
//   date: string;
// }


// const mockBlogData: Record<string, Blog> = {
//   '1': { id: '1', title: 'Sample Blog 1', image: '/sample1.jpg', content: 'Full blog content here...', author: 'Author 1', date: '2024-10-25' },
// };

// const BlogDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const blog = mockBlogData[id as string];

//   if (!blog) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#343a40] text-white rounded-xl shadow-lg">
//       <h1 className="text-3xl font-bold text-accent1 mb-4 transition-all duration-300">{blog.title}</h1>
//       <p className="text-gray-400 italic mb-2">By {blog.author} • {blog.date}</p>
//       <div className="overflow-hidden rounded-lg mb-6">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-64 object-cover rounded-lg transition-transform duration-500 transform hover:scale-105 hover:rotate-1"
//         />
//       </div>
//       <div className="text-gray-300 text-lg leading-relaxed transition-colors duration-300 hover:text-gray-100">
//         {blog.content}
//       </div>
//       <div className="mt-8">
//         <button
//           onClick={() => router.back()}
//           className="mt-6 bg-accent2 hover:bg-accent1 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//         >
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;
