<script setup>
const computeColour = (text) => {
  if (text === "Music") {
    return "pink";
  } else if (text === "Fashion") {
    return "blue";
  } else {
    return "red";
  }
}
const {blogPosts} = defineProps(["blogPosts"])
</script>

<template>
  <div v-for="post in blogPosts" :key="post.id"
       class="py-4 rounded border border-gray-300 md:p-6 bg-gray-200 flex flex-col md:flex-row md:items-center justify-center
       mb-10 cursor-pointer" @click="router.push(`/posts/${post.id}`)">
    <div class="h-48 md:w-1/3 md:mr-6 m-4">
      <img :src="`/carousel/${post.img}`" class="h-48 rounded object-cover w-full">
    </div>
    <div class="flex flex-col md:w-3/4 md:p-0 px-4">
      <div class="w-full h-8 font-semibold md:text-2xl text-xl" >
        {{ post.title }}
      </div>
      <div class="flex justify-between mt-10 items-center">
        <div :class="`py-2 px-4 rounded-full bg-${computeColour(post.tag)}-600 text-white`">
          {{ post.tag }}
        </div>
        <div class="rounded-lg text-gray-400">
          {{ post.date }}
        </div>
      </div>
    </div>
  </div>
</template>