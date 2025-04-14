import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <div className="text-gray-500">
          {new Date(weatherData.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-5xl font-bold text-gray-800">
            {Math.round(weatherData.main.temp)}°C
          </div>
          <div className="text-gray-600 capitalize">
            {weatherData.weather[0].description}
          </div>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather icon"
          className="w-20 h-20"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Feels Like</div>
          <div className="font-semibold">
            {Math.round(weatherData.main.feels_like)}°C
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Humidity</div>
          <div className="font-semibold">{weatherData.main.humidity}%</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Wind Speed</div>
          <div className="font-semibold">{weatherData.wind.speed} m/s</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-gray-500 text-sm">Pressure</div>
          <div className="font-semibold">{weatherData.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
