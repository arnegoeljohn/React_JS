import React from "react";

export default function BookCard({ book, onRemove }) {
  return (
    <div className="bg-white p-4 rounded shadow text-left">
      <p className="font-bold mb-1">{book.title}</p>
      <p className="text-gray-700 mb-4">by {book.author}</p>
      <button
        className="font-semibold bg-red-100 text-red-600 px-25 py-1 rounded hover:bg-red-200"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}
