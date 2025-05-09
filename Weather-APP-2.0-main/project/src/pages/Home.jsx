import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-white mb-6">Weather Wonder</h1>
        <p className="text-xl text-white/90 mb-8">Discover the weather in your city with a touch of magic!</p>
        <Link
          to="/weather"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
        >
          <Search size={20} />
          Check Weather
        </Link>
      </div>
    </div>
  );
};

export default Home;