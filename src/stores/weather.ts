import { defineStore } from "pinia";
import { Geolocation } from "@capacitor/geolocation";

import type { OneWeather } from "@/types/interface/oneWeather.model";
import type { CityWeather } from "@/types/interface/city.model";

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=1bd8c9af0d0748ebe0735d3c9694ee46";
const cityUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=1bd8c9af0d0748ebe0735d3c9694ee46";

// const weather = ref<OneWeather>();
// const city = ref<CityWeather>();

// export function useWeather() {
//   return {
//     weather,
//     city,
//     // fetchWeather,
//   };
// }

type WeatherStore = {
  weather: OneWeather[];
  city: CityWeather[];
  loading: boolean;
};

export const useWeatherStore = defineStore({
  id: "weather",
  state: () =>
    <WeatherStore>{
      weather: [],
      city: [],
      loading: false,
    },
  getters: {
    saveLocalStorage: (state) => {
      localStorage.setItem("city", JSON.stringify(state.city));
    }
  },
  actions: {
    async fetchCurrentWeather() {
      this.loading = true;
      try {
        const { coords } = await Geolocation.getCurrentPosition();
        const response = await fetch(
          `${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`
        );
        const cityRes = await fetch(
          `${cityUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`
        );
        this.city = [await cityRes.json()];
        //save city to localstorage
        this.weather = await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchCityWeather(name: string) {
      this.loading = true;
      try {
        const response = await fetch(`${cityUrl}&q=${name}&units=metric`);
        const res = await response.json();
        this.city.push(res);
        //save city to localstorage
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    removeCity(id: number) {
      this.city.splice(id, 1);
    }
  },
});
