<template>
  <div
    v-if="modalActive"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-6xl">
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
        >
          <h3 class="text-3xl font-semibold">Locations</h3>
        </div>
        <div class="relative p-6 flex-auto">
          <div class="my-4 text-slate-500 text-lg leading-relaxed">
            <List />
          </div>
        </div>
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
        >
          <h3 class="text-3xl font-semibold">Add Location</h3>
        </div>
        <div class="relative p-6 flex-auto">
          <div class="my-4 text-slate-500 text-lg leading-relaxed">
            <Add />
          </div>
        </div>

        <!-- BUTTONS -->
        <div
          class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
        >
          <button
            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="hundleClose"
          >
            Close
          </button>
          <!-- <button
            class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            v-on:click="hundleClose"
          >
            Save Changes
          </button> -->
        </div>
      </div>
    </div>
  </div>
  <div v-if="modalActive" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script setup lang="ts">
import List from "./Locations/List.vue";
import Add from "./AddLocation/Add.vue";
const props = defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const hundleClose = () => {
  emit("close");
};
</script>
