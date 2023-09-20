import React, { useState } from 'react';
import background from '../utils/img/background.jpg';
import { Link } from 'react-router-dom';

const SearchHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-md flex mt-12">
        <input
          type="text"
          placeholder="Enter movie name here"
          className="flex-grow px-4 py-2 border rounded-l-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery.trim() !== "" ? (
          <Link to={`/search/${searchQuery}`}>
            <button className="px-2 sm:px-4 py-2 bg-green-800 text-white rounded-r-lg hover:bg-green-900">
              Search
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="px-2 sm:px-4 py-2 bg-gray-400 text-white rounded-r-lg cursor-not-allowed"
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchHome;
