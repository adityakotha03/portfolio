import React from 'react';
import NavBar from '../components/NavBar';

interface BlogPost {
  title: string;
  summary: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Understanding React Components',
      summary: 'An introduction to React components and their uses.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'State Management with Redux',
      summary: 'How to manage application state with Redux.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Introduction to Tailwind CSS',
      summary: 'A guide on using Tailwind CSS for responsive design.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Provide dummy functions for NavBar's required props */}
      <NavBar isMenuOpen={false} setIsMenuOpen={() => {}} />
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-sky-400">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-slate-800 p-4 rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-sky-400">{post.title}</h2>
              <p className="text-slate-300 mt-2">{post.summary}</p>
              <button className="mt-4 text-sky-400 hover:text-sky-300">Read more</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
