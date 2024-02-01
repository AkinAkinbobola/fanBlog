<script setup>
import data from "../../data/db.json";
import { onMounted, ref } from "vue";

const route = useRoute()
const post = ref([]);

const getPosts =  () => {
  post.value =  data.find(blogPost => blogPost.id === parseInt(route.params.id));
}

onMounted(getPosts);
</script>


<template>
  <div class="font-poppins flex flex-col py-4 px-3 md:flex-row md:py-24 md:px-24 bg-whiteSmoke-0">
    <PostContent :post="post" class="leading-relaxed md:w-9/12 md:mr-10"/>
    <PostAds class="md:w-2/6"/>
  </div>
</template>