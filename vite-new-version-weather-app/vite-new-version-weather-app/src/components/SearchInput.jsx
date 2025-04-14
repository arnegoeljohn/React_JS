import React from "react";

const SearchInput = ({ city, setCity, handleSubmit, loading }) => (
  <form onSubmit={handleSubmit} className="mb-8">
    <div className="flex">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg disabled:bg-blue-400 transition duration-200"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  </form>
);

export default SearchInput;
