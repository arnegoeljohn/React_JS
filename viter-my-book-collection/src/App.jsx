import { BookOpen } from "lucide-react";
import React, { useState } from "react";
import BookForm from "./components/form/BookForm";
import BookCard from "./components/form/BookCard";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (!title.trim() || !author.trim()) {
      alert("Book title cannot be empty.");
      return;
    }

    setBooks([...books, { title, author }]);
    setTitle("");
    setAuthor("");
  };

  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-1">
        My Book Collection
      </h1>
      <p className="text-center text-blue-700 mb-8">
        Track your reading journey
      </p>

      <BookForm
        title={title}
        author={author}
        setTitle={setTitle}
        setAuthor={setAuthor}
        onAdd={handleAddBook}
      />

      {books.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          <div className="flex justify-center text-5xl mb-4">
            <BookOpen size={50} />
          </div>
          <p className="text-lg font-medium">Your collection is empty</p>
          <p className="text-sm text-gray-400">Add some books to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              onRemove={() => handleRemoveBook(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
