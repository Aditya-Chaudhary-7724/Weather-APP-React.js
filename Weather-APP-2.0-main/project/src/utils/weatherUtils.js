export const getWeatherBackground = (weatherMain) => {
  const backgrounds = {
    Clear: {
      image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920',
      message: "Perfect day for an adventure! ☀️"
    },
    Clouds: {
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920',
      message: "Head in the clouds kind of day! ☁️"
    },
    Rain: {
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920',
      message: "Time for hot cocoa and a good book! 🌧️"
    },
    Snow: {
      image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1920',
      message: "Winter wonderland in full effect! ❄️"
    },
    Thunderstorm: {
      image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920',
      message: "Thor must be having a party! ⚡"
    },
    default: {
      image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920',
      message: "Weather is full of surprises! 🌈"
    }
  };

  return backgrounds[weatherMain] || backgrounds.default;
};

export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
};