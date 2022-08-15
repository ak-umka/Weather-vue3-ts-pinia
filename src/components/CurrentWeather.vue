<template>
  <div class="pt-10" v-if="weather?.current">
    <div class="box-content items-center grid grid-cols-4 gap-4">
      <div
        v-for="item in city"
        :key="item"
        class="flex flex-col border mx-2 bg-white rounded p-4 w-full max-w-xs"
      >
        <div class="font-bold text-xl">{{ cityFormat(item.name) }}</div>
        <div class="text-sm text-gray-500">{{ currentDate() }}</div>
        <div
          class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24"
        >
          <!-- 24°-->
          <img :src="getWeatherIcon(item.weather[0]?.icon, '4x')" />
        </div>
        <div class="flex flex-row items-center justify-center mt-6">
          <div class="font-medium text-6xl">
            {{ formatTemperature(item.main.temp, "C") }}
          </div>
          <div class="flex flex-col items-center ml-6">
            <div class="mt-1">
              <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
              <span class="text-sm font-light text-gray-500">{{
                new Date(item.sys.sunrise * 1000).toLocaleTimeString(
                  undefined
                )
              }}</span>
            </div>
            <div>
              <span class="text-sm"
                ><i class="far fa-long-arrow-down"></i
              ></span>
              <span class="text-sm font-light text-gray-500">{{
                new Date(item.sys.sunset * 1000).toLocaleTimeString(
                  undefined
                )
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between mt-6">
          <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Dew Point</div>
            <div class="text-sm text-gray-500">
              {{ Math.round( item.clouds.all) }} %
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Humidity</div>
            <div class="text-sm text-gray-500">
              {{ item.main.humidity }} °
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Visibility</div>
            <div class="text-sm text-gray-500">
              {{ Math.round(item.visibility / 1000) }} Km
            </div>
          </div>
        </div>
        <div class="pt-2">
          Feels like {{ Math.round(item.main.feels_like) }}°.
          {{ item.weather[0].description }}.
        </div>
      </div>
    </div>
    <!-- {{ weather }} -->
  </div>
</template>

<script setup lang="ts">
import formatTemperature from "@/helper/formatTemp";
import getWeatherIcon from "@/helper/getWeatherIcon";

const props = defineProps({
  weather: {
    type: Object,
    default: () => ({}),
  },
  city: {
    type: Object,
    default: "",
  },
});

function cityFormat(city: string) {
  return city === "Prigorodnyy" ? "Nur-Sultan" : city;
}

function currentDate() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return date;
}
</script>

<style scoped></style>
