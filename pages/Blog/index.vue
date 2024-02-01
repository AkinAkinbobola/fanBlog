<script setup>
import postsData from "../../data/db.json"
import {ref} from "vue";

const blogData = ref(postsData);

const setPosts = (posts) => {
  blogData.value = posts;
}
</script>

<template>
  <div class="bg-whiteSmoke-0 font-poppins md:px-20 md:pt-16 md:pb-32 p-4">
    <BlogFilter :blogData="blogData" @filteredPosts="setPosts"/>
    <BlogPostSection :blogData="blogData"/>
  </div>
</template>

<style scoped>

</style>