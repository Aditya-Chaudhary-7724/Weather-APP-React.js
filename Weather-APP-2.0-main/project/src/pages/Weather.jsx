import React, { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import { getWeatherBackground } from '../utils/weatherUtils';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  const background = weatherData 
    ? getWeatherBackground(weatherData.weather[0].main)
    : getWeatherBackground('default');

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{
        backgroundImage: `url(${background.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="min-h-screen bg-black/30 backdrop-blur-sm flex flex-col items-center pt-20 px-4">
        <form onSubmit={fetchWeather} className="w-full max-w-md mb-8">
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="w-full px-4 py-3 rounded-full pl-12 pr-4 bg-white/90 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </form>

        {error && (
          <div className="bg-red-500/90 text-white px-4 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        {weatherData && (
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <p className="text-xl text-white font-medium">{background.message}</p>
            </div>
            <WeatherCard data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;