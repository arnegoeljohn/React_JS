import React, { useState } from "react";

export default function JokeApi() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    setJoke("");

    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();

      if (data.type === "single") {
        setJoke(data.joke);
      } else if (data.type === "twopart") {
        setJoke(`${data.setup} ... ${data.delivery}`);
      } else {
        setJoke("Couldn't fetch a joke this time.");
      }
    } catch (error) {
      setJoke("Error fetching joke. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">😂 Random Joke Generator</h1>
      <button
        onClick={getJoke}
        className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-6 py-3 text-lg font-semibold shadow-lg"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get a Joke"}
      </button>
      {joke && (
        <p className="mt-6 max-w-xl text-center text-lg bg-gray-800 p-4 rounded-xl shadow">
          {joke}
        </p>
      )}
    </div>
  );
}
