import React from "react";

const SearchNewsInput = ({ query, setQuery, handleSubmit, loading }) => (
  <form onSubmit={handleSubmit} className="mb-8">
    <div className="flex gap-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:bg-blue-400 transition duration-200"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  </form>
);

export default SearchNewsInput;
