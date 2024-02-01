<script setup>
import { ref, defineEmits, computed } from "vue";
import postsData from "../../data/db.json";

const filtered = ref([]);
const emit = defineEmits(["filteredPosts"]);
const activeFilter = ref("all");

const handleFilter = (input) => {
  if(input === "all"){
    filtered.value = postsData;
  }
  else if(input === "music") {
    filtered.value = postsData.filter(post => post.tag === "Music")

  }
  else if(input === "fashion") {
    filtered.value = postsData.filter(post => post.tag === "Fashion")
  }
  else if(input === "controversies") {
    filtered.value = postsData.filter(post => post.tag === "Controversies")
  }
  emit("filteredPosts", filtered.value);
  activeFilter.value = input;

}

const buttonClass = computed(() => (filter) => {
  return {
    'bg-ecru-0 text-white': activeFilter.value === filter,
    'bg-gray-300': activeFilter.value !== filter,
    'py-2': true,
    'px-3': true,
    'md:px-6': true,
    'rounded': true,
    'mr-4': true,
  };
});
</script>

<template>
  <div class="md:flex justify-between items-center md:mb-16 mb-4">
    <div class="text-2xl font-semibold md:mb-0 mb-3">Blog Posts</div>

    <div class="flex">
      <button :class="buttonClass('all')" @click="handleFilter('all')">All Posts</button>
      <button :class="buttonClass('music')" @click="handleFilter('music')">Music</button>
      <button :class="buttonClass('fashion')" @click="handleFilter('fashion')">Fashion</button>
      <button :class="buttonClass('controversies')" @click="handleFilter('controversies')">Controversies</button>
    </div>
  </div>
</template>
