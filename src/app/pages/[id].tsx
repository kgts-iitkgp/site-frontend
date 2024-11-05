import { useRouter } from 'next/router';
import Image from 'next/image';

interface Blog {
  id: string;
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
}


const mockBlogData: Record<string, Blog> = {
  '1': { id: '1', title: 'Sample Blog 1', image: '/sample1.jpg', content: 'Full blog content here...', author: 'Author 1', date: '2024-10-25' },
};

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = mockBlogData[id as string];

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#343a40] text-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-accent1 mb-4 transition-all duration-300">{blog.title}</h1>
      <p className="text-gray-400 italic mb-2">By {blog.author} • {blog.date}</p>
      <div className="overflow-hidden rounded-lg mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-500 transform hover:scale-105 hover:rotate-1"
        />
      </div>
      <div className="text-gray-300 text-lg leading-relaxed transition-colors duration-300 hover:text-gray-100">
        {blog.content}
      </div>
      <div className="mt-8">
        <button
          onClick={() => router.back()}
          className="mt-6 bg-accent2 hover:bg-accent1 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
