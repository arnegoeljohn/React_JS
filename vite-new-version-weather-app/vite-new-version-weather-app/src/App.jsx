import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import useFetch from "./hooks/useFetch";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const API_KEY = "b53b97cd162212fab14e00257924b570";

  const { weatherData, loading, error, fetchWeather } = useFetch(API_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-width-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
            <p className="mt-2 text-gray-600">
              Get current weather information
            </p>
          </div>

          <SearchInput
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading weather data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          <WeatherCard weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
