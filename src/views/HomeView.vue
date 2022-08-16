<template>
  <div class="container mx-auto px-52 pt-10">
    <Settings @close="toggleModal" :modalActive="modalActive"> </Settings>
    <button
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      @click="toggleModal"
    >
      Toggle modal
    </button>

    <CurrentWeather :weather="weather" :city="city" />
    <!-- {{ weather }} -->
    <!-- {{ getLocalStorage  }} -->
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, ref, watch, computed  } from "vue";

import { useWeatherStore } from "@/stores/weather";
import Settings from "@/components/Settings/Settings.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";

export default defineComponent({
  setup() {
    const store = useWeatherStore();
    const { weather, city  } = storeToRefs(store);
    const { fetchCurrentWeather, getLocalStorage } = store;

    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    onMounted(() => {
      fetchCurrentWeather();
    });

    onMounted(() => {
      setTimeout(() => {
        getLocalStorage();
      } , 1000);
    });

    // const test = computed(() => {
    //   getLocalStorage()
    // })

    return {
      
      // test,
      modalActive,
      weather,
      city,
      toggleModal,
    };
  },
  components: { CurrentWeather, Settings },
});
</script>

<style scoped></style>
