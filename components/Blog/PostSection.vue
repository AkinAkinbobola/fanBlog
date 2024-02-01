<script setup>
import {defineProps} from 'vue';

const {blogData} = defineProps(["blogData"])

const computeColour = computed(() => {
  return (text) => {
    if (text === "Music") {
      return "pink";
    } else if (text === "Fashion") {
      return "blue";
    } else {
      return "red";
    }
  };
});
</script>

<template>
  <div class="md:grid md:grid-cols-4 md:grid-rows-4 md:gap-5">
    <div v-for="(data, index) in blogData" :key="index"
         class="flex flex-col bg-white p-3 rounded shadow-sm cursor-pointer md:mb-0 mb-4"

    >
      <img :src="`/carousel/${data.img}`" class="object-cover h-52 w-full mb-3">
      <div class="flex justify-between items-center mb-4">
        <button :class="`py-1 px-2 rounded-3xl bg-${computeColour(data.tag)}-600 text-white text-base`">{{ data.tag }}
        </button>
        <p class="text-xs text-gray-400">{{ data.date }}</p>
      </div>
      <p class="font-medium text-lg">{{ data.title }}</p>
    </div>
  </div>
</template>