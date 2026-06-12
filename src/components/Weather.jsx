import { useState } from "react";

const API_KEY = "e57ec7c8d534be209ae4be7cafb68083";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  async function fetchWeather() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`,
      );
      if (!response.ok) {
        throw new Error(
          `City not found. HTTP error! status: ${response.status}`,
        );
      }
      const json = await response.json();
      setWeather(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    fetchWeather();
  }

  return (
    <div>
      <h1>Search</h1>

      <label>Latitude</label>
      <input
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />

      <label>Longitude</label>
      <input
        type="number"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />

      <button onClick={handleClick}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>There was an issue fetching your data: {error.message}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp)}°F</p>
          <p>Feels like: {Math.round(weather.main.feels_like)}°F</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
