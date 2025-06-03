import { useEffect, useState } from 'react';
import clear from "../assets/clear.webp";
import cloud from "../assets/cloud.webp";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";
import SearchCom from './SearchCom';
import Weatherinfo from "./Weatherinfo"

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState('');

  const allicons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow
  };

  async function sear(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const icon = allicons[data.weather[0].icon] || clear;
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temprature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon
        });
      } else {
        setWeatherData(false);
        alert("City not found");
      }
    } catch (error) {
      console.error("API error", error);
    }
  }

  useEffect(() => {
    sear("Jaunpur");
  }, []);

  function handleSearchClick() {
    if (city.trim() !== "") {
      sear(city);
      setCity("");
    }
  }

  return (
    <div className="weather">
      <SearchCom
        city={city}
        setCity={setCity}
        onSearch={handleSearchClick}
      />
      {weatherData && <Weatherinfo data={weatherData} />}
    </div>
  );
}