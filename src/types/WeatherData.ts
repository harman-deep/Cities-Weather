export type Forecastday = {
  day: Day;
  date: string;
};

type Day = {
  avgtemp_c: number;
  condition: Condition;
};

type Condition = {
  code?: number;
  icon?: string;
  text?: string;
};

type Current = {
    temp_c: number;
    condition: Condition;
}

type Forecast = {
    forecastday: Array<Forecastday>
}

export type WeatherData = {
    current: Current;
    forecast: Forecast;
}