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
    <div className="min-h-screen bg-white">
      <NavBar isMenuOpen={false} setIsMenuOpen={() => {}} />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-light text-gray-900 mb-12 border-b border-gray-200 pb-4">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="hover:bg-gray-50 p-6 rounded-lg transition-colors">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-medium text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed font-light mb-4">{post.summary}</p>
              <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Read more</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
