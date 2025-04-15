import React from "react";

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "http://placehold.co/500x750?text=No+Image";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full">
      <img
        src={poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{movie.title}</h3>

        <div className="flex items-center gap-2 mb-1">
          <span className="bg-yellow-400 text-black text-sm font-bold px-2 py-0.5 rounded">
            {movie.vote_average || "N/A"}
          </span>
          <span className="text-gray-600 text-sm">
            {movie.release_date?.split("-")[0] || "N/A"}
          </span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-3">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
