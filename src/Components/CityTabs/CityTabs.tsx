import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeatherCard from "../WeatherCard/WeatherCard";
import { intialWeatherData } from "../../mockData/intialWeatherData";
import './CityTabs.css'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const CityNamesTabs = () => {
  const tabsData = [
    { value: 0, label: "OTTAWA" },
    { value: 1, label: "MOSCOW" },
    { value: 2, label: "TOKYO" },
  ];
  const [value, setValue] = useState<number>(0);
  const [data, setData] = useState(intialWeatherData);
  const [currentCity, setCurrentCity] = useState<string | null>("OTTAWA");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0bd568c3f0504ee2b32212453221112&q=${currentCity}&days=3`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentCity(event.currentTarget.textContent);
    setValue(newValue);
  };
  
  return (
    <div className="tabs-wrapper">
      <Tabs value={value} onChange={handleChange}>
        {tabsData.map((i) => (
          <Tab label={i.label} />
        ))}
      </Tabs>
      {tabsData.map((i) => (
        <div className="tabs-panel">
        <TabPanel value={value} index={i.value}>
          <WeatherCard weatherData={data} />
        </TabPanel>
        </div>
      ))}
    </div>
  );
};

export default CityNamesTabs;
