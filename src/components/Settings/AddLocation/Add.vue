<template>
  <div class="flex">
    <form @submit.prevent="addLocation()" class="flex">
      <div class="flex pr-3">
        <svg class="w-8" viewBox="0 0 511.999 511.999">
          <path
            d="M409.124,63.426C368.224,22.525,313.843,0,256.001,0S143.777,22.525,102.877,63.426 c-40.901,40.902-63.426,95.282-63.426,153.123c0,117.012,110.638,214.337,170.077,266.623c8.26,7.266,15.393,13.541,21.076,18.849 c7.12,6.651,16.259,9.977,25.396,9.977c9.139,0,18.276-3.326,25.397-9.977c5.683-5.309,12.816-11.583,21.076-18.849 c59.439-52.287,170.077-149.611,170.077-266.623C472.549,158.708,450.025,104.328,409.124,63.426z M282.663,460.654 c-8.441,7.425-15.73,13.838-21.74,19.451c-2.761,2.577-7.085,2.578-9.847,0c-6.009-5.615-13.299-12.027-21.74-19.452 c-55.88-49.155-159.895-140.654-159.895-244.103c0-102.868,83.689-186.557,186.558-186.557 c102.868,0,186.557,83.689,186.557,186.557C442.557,319.999,338.543,411.498,282.663,460.654z"
          />
          <path
            d="M256.001,112.938c-52.621,0-95.431,42.809-95.431,95.43s42.81,95.43,95.431,95.43s95.43-42.809,95.43-95.43 S308.622,112.938,256.001,112.938z M256.001,273.805c-36.083,0-65.439-29.356-65.439-65.438s29.356-65.438,65.439-65.438 s65.438,29.356,65.438,65.438S292.084,273.805,256.001,273.805z"
          />
        </svg>

        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          id="city_input"
          v-model="newLocation.name"
          :tabindex="2"
          autocorrect="off"
          spellcheck="false"
          placeholder="City"
        />
      </div>
      <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 " type="submit" :tabindex="3">+</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useWeatherStore } from "../../../stores/weather";

const store = useWeatherStore();
const { city }: { [key: string] } = store;

const newLocation = reactive({
  name: "",
});

function addLocation() {
  let name = newLocation.name;
  store.fetchCityWeather(name);
  newLocation.name = "";
}
</script>


