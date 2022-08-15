interface City {
  id: number;
  cod: number;
  timezone: number;
  name: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface cityWeather {
  temp: number;
  feels_like: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  wind: Wind[];
  city: City[];
}

export interface CityWeather {
  city: cityWeather[];
}