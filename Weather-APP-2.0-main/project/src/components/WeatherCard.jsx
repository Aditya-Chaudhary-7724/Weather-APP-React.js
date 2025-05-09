import React from 'react';
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react';
import { kelvinToCelsius } from '../utils/weatherUtils';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-xl text-gray-600 mt-2">{data.weather[0].description}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="text-red-500" />
          <div>
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="text-xl font-semibold">{kelvinToCelsius(data.main.temp)}°C</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Cloud className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Feels Like</p>
            <p className="text-xl font-semibold">{kelvinToCelsius(data.main.feels_like)}°C</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Wind className="text-green-500" />
          <div>
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="text-xl font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-xl font-semibold">{data.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;