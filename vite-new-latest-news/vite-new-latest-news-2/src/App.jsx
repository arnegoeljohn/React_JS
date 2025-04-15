import React, { useState } from "react";
import SearchNewsInput from "./components/SearchNewsInput";
import NewsCard from "./components/NewsCard";
import useNewsFetch from "./hooks/useNewsFetch";

const LatestNews = () => {
  const [query, setQuery] = useState("");
  const API_KEY = "52f0dd7f328b41e094f13691e93202f3";

  const { articles, loading, error, fetchNews } = useNewsFetch(API_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-3xl">Latest News</h1>
          </div>

          <SearchNewsInput
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>

          {!loading && articles.length === 0 && (
            <p className="text-center text-gray-600 mt-10">
              No articles found. Try searching for something else.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
