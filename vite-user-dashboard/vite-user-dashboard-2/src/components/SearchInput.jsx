import React from "react";

const SearchInput = ({ onSearch }) => {
  const inputRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
