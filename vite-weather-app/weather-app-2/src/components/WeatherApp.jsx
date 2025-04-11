import React from "react";

const WeatherApp = () => {
  const [city, setCity] = React.useState("");
  const [weatherData, setWeatherData] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const API_KEY = "b53b97cd162212fab14e00257924b570";

  const fetchWeatherData = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  console.log(weatherData);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-width-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
              <p className="mt-2 text-gray-600">
                Get current weather information
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg disabled:bg-blue-400 transition duration-200"
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
            </form>
            {/* For loading when fetching from API */}
            {loading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-2 text-gray-600">Loading weather data...</p>
              </div>
            )}
            {/* For error when fetching from API */}
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                <p>Error: {error}</p>
              </div>
            )}
            {/* For weather data*/}
            {weatherData && (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {weatherData.name}, {weatherData.sys.country}
                  </h2>
                  <div className="text-gray-500">
                    {new Date(weatherData.dt * 1000).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
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
                    <div className="font-semibold">
                      {weatherData.main.humidity}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-gray-500 text-sm">Wind Speed</div>
                    <div className="font-semibold">
                      {weatherData.wind.speed} m/s
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-gray-500 text-sm">Pressure</div>
                    <div className="font-semibold">
                      {weatherData.main.pressure} hPa
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
