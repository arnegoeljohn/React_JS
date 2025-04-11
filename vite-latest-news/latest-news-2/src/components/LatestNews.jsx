import { ArrowRight } from "lucide-react";
import React from "react";

const NewsApp = () => {
  const [query, setQuery] = React.useState("tesla");
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const API_KEY = "3574cdae4ef64a7fb3ca84c638da0c65";

  const fetchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=10`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news.");
      }

      const data = await response.json();

      if (data.articles.length === 0) {
        throw new Error("No articles found.");
      }

      setArticles(data.articles);
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews();
  };

  React.useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Latest News</h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-8 flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg disabled:bg-blue-400 transition duration-200"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={article.urlToImage || "http://placehold.co/600x400"}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="py-4 px-4 flex flex-col flex-grow">
                <h3 className="mb-2 font-bold text-lg line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm flex-grow line-clamp-3">
                  {article.description || "No description available."}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <small className="text-gray-500">
                    {article.source?.name || "Unknown"}
                  </small>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  >
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
