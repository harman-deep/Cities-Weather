import React from "react";
import Card from "@mui/material/Card";
import { Forecastday, WeatherData } from "../../types/WeatherData";
import "./WeatherCard.css";

export type WeatherCardProps = {
  weatherData: WeatherData;
};

const WeatherCard = (props: WeatherCardProps) => {
  const { weatherData } = props;
  const forecastData: Array<Forecastday> = weatherData.forecast.forecastday;

  const getDay = (date: string) => {
    const formattedDate = new Date(date);
    const dayDate = formattedDate.toString();
    return dayDate.slice(0, 3);
  };

  return (
    <Card className="card" raised>
      <div className="curr-wrapper">
        <p>Today</p>
        <div className="curr-icon-text">
          <img src={weatherData.current.condition.icon} />
          <div className="curr-temp-text">
            <h2>{weatherData.current.temp_c}{'\u00b0'}</h2>
            <p>{weatherData.current.condition.text}</p>
          </div>
        </div>
      </div>
      <div className="forecast-data-wrapper">
        {forecastData.map((forecastDay) => (
          <div className="forecast-date-icon">
            <p>{getDay(forecastDay.date)}</p>
            <img src={forecastDay.day.condition.icon} />
            <h5>{forecastDay.day.avgtemp_c}{'\u00b0'}</h5>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeatherCard;
