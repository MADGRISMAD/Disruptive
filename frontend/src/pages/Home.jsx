import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">Discover a New World of Entertainment</h1>
        <p className="text-lg mb-8">Welcome to our multimedia content platform. Explore a wide variety of categories and enjoy exclusive content.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-purple-600 shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Explore Our Content</h2>
            <p className="text-lg mb-4">Dive into a library of carefully curated multimedia content. From texts to videos, we have something for everyone.</p>
            <Link to="/content-library" className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-6 rounded-lg inline-block">Explore</Link>
          </div>
          <div className="bg-indigo-600 shadow-md rounded-lg p-8"> 
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-4">Sign up now to access exclusive features, create personalized playlists, and engage in discussions with other members.</p>
            <Link to="/login" className="bg-white hover:bg-gray-200 text-indigo-600 font-bold py-2 px-6 rounded-lg inline-block">Sign Up</Link> {/* Text color change */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
