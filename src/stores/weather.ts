import { defineStore } from "pinia";
import { Geolocation } from "@capacitor/geolocation";

import type { CityWeather } from "@/types/interface/city.model";

const cityUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=1bd8c9af0d0748ebe0735d3c9694ee46";

type WeatherStore = {
  city: CityWeather[];
  loading: boolean;
};

export const useWeatherStore = defineStore({
  id: "city",
  state: () =>
    <WeatherStore>{
      city: [],
      loading: false,
    },
  getters: {},
  actions: {
    async fetchCurrentWeather() {
      this.loading = true;
      try {
        const { coords } = await Geolocation.getCurrentPosition();
        const cityRes = await fetch(
          `${cityUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`
        );
        this.city = [await cityRes.json()];
        if (localStorage.getItem("city") === null) {
          this.setLocalStorage();
          console.log("current");
        }
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
        this.setLocalStorage();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    setLocalStorage() {
      localStorage.setItem("city", JSON.stringify(this.city));
      console.log("test");
    },

    getLocalStorage() {
      this.city = JSON.parse(localStorage.getItem("city") || "[]");
      return this.city;
    },

    removeCity(id: number) {
      this.city.splice(id, 1);
    },
  },
});
