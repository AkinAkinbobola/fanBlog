<script setup>
import postsData from "../data/db.json";
import {ref, watch} from "vue";
import MingcuteCloseLine from "~/components/Icons/Cancel.vue";

const blogPosts = ref(null);
const search = ref("");

const clearSearch = () => {
  search.value = ""
}

watch(search, () => {
  if (search.value.trim().toLowerCase() === "") {
    blogPosts.value = null;
  } else {
    const searchTerm = search.value.toLowerCase();
    const filteredPosts = postsData.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.tag.toLowerCase().includes(searchTerm)
    );
    blogPosts.value = filteredPosts.length > 0 ? filteredPosts : null;
  }
});
</script>

<template>
  <div class="font-poppins">
    <div class="pt-4 px-16 mb-4 flex items-center">
      <MingcuteCloseLine @click="clearSearch" class="mr-4 cursor-pointer text-xl"/>
      <input type="text" class="outline-none border-b w-full pb-1" v-model="search">
    </div>

    <div class="bg-whiteSmoke-0 md:py-12 py-4 px-4 md:px-28 h-max">
      <SearchSkeletonDisplay :blogPosts="blogPosts" v-if="!blogPosts"/>

      <div v-else>
        <SearchPosts :blogPosts="blogPosts"/>
      </div>
    </div>
  </div>
</template>
