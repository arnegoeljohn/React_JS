import React from "react";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img
        src={article.urlToImage || "http://placehold.co/600x400"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="py-4 px-4 flex flex-col flex-grow">
        <h3 className="mb-2 font-bold text-lg line-clamp-2">{article.title}</h3>
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
  );
};

export default NewsCard;
