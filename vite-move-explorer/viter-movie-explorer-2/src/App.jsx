import React from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

const App = () => {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const API_KEY = "10fdbd3050244f8963f4d152552ca800";

  const fetchMovies = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (data.results.length === 0) {
        setMovies([]);
        setError("No results found.");
      } else {
        setMovies(data.results);
        setError("");
      }
    } catch (err) {
      setMovies([]);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Movie Explorer</h1>
          </div>

          <SearchBar
            query={query}
            setQuery={setQuery}
            onSubmit={handleSubmit}
            loading={loading}
          />

          {loading && <p className="text-center text-gray-600">Loading...</p>}

          {!loading && error && (
            <div className="bg-red-100 text-red-700 p-4 mb-4 rounded text-center">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
