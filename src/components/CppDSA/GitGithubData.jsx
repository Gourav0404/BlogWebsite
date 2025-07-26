import React from 'react';
import { useNavigate } from 'react-router-dom';

const GitGithubData = ({ image, title, desc }) => {

  const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt="Card Image" />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-base">
          {desc}
        </p>
        <button
          onClick={() => navigate('/git-github')}
          className="px-4 py-2  text-blue-500"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default GitGithubData;

