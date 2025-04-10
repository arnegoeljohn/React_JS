import React from "react";

export default function BookForm({
  title,
  author,
  setTitle,
  setAuthor,
  onAdd,
}) {
  return (
    <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto mb-10">
      <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium mb-1">Book Title</label>
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Author</label>
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        onClick={onAdd}
      >
        Add to Collection
      </button>
    </div>
  );
}
