import React from 'react';
import hum from "../assets/hum.jpg";
import wind from "../assets/wind.jpg";

export default function WeatherInfo({ data }) {
  return (
    <>
      <img src={data.icon} alt="Weather icon" className="weather-icon" />
      <p className="temperature">{data.temprature}°C</p>
      <p className="location">{data.location}</p>

      <div className="weather-data">
        <div className="col">
          <img src={hum} alt="Humidity" />
          <div>
            <p>{data.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="Wind" />
          <div>
            <p>{data.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
}