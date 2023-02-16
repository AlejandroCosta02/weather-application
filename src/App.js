import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Input_Component from "./components/Input_Component";
import Card_Weather from "./components/Card_Weather";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=298b66ab8c6b3c9621a16bcdce84ce0e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
      setLocation("");
    }
  };

  //send data
  const cityName = data.name;
  const dataTemp = data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null;

  const dataHum = data.main ? (
    <p className="bold">{data.main.humidity}%</p>
  ) : null;

  const dataDesc = data.weather ? <p>{data.weather[0].main}</p> : null;
  const dataFeel = data.main ? (
    <p className="bold">{data.main.feels_like.toFixed()}°C</p>
  ) : null;

  const dataWind = data.wind ? (
    <p className="bold">{data.wind.speed.toFixed()} MPH</p>
  ) : null;

  const dataFinal = data.name !== undefined && (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <p className="bold">{data.main.feels_like.toFixed()}°C</p>
        ) : null}
        <p className="detail">Feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

        <p className="detail">Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? (
          <p className="bold">{data.wind.speed.toFixed()} MPH</p>
        ) : null}
        <p className="detail">Wind</p>
      </div>
    </div>
  );
  return (
    <div className="app">
      <div className="search">
        <Input_Component
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="City"
        />
     
      </div>
      <Card_Weather
        dataName={cityName}
        dataTemp={dataTemp}
        dataDesc={dataDesc}
        dataFeel={dataFeel}
        dataHum={dataHum}
        dataWind={dataWind}
        dataFinal={dataFinal}
      />
      
    </div>
  );
}

export default App;
