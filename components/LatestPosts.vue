<script setup>

</script>

<template>
  <div class="md:px-28 md:py-12 px-5 py-8 bg-platinum-0 font-poppins">
    <div class="flex justify-between items-center mb-4">
      <p class="text-4xl">Blog Posts</p>
      <div class="flex items-center">
        <p class="text-lg pr-4">
          View all posts
        </p>
        <font-awesome-icon :icon="['fas', 'arrow-right']" class=""/>
      </div>
    </div>

    <div class="md:grid md:grid-cols-2 md:gap-5">
      <div class="md:grid md:grid-cols-2 md:gap-5">
        <div class="md:col-span-2 bg-white py-6 px-4 cursor-pointer mb-4 md:mb-0">
          <img alt="" src="/blog-posts/1.jpg" class="mb-3 object-cover w-full h-80 md:h-96"/>
          <div class="flex justify-between items-center mb-4">
            <button class="py-2 px-4 rounded-3xl bg-blue-500 text-white text-lg">Fashion</button>
            <p class="text-sm text-gray-400 whitespace-nowrap">6 Dec 2023</p>
          </div>

          <p class="font-bold text-lg">Yeezy: A Fashion Revolution</p>
        </div>
        <div class="bg-white py-6 px-4 cursor-pointer mb-4 md:mb-0">
          <img alt="" src="/blog-posts/2.jpg" class="mb-3 object-cover h-80 w-full md:h-64"/>
          <div class="flex justify-between items-center mb-4">
            <button class="py-2 px-4 rounded-3xl bg-pink-500 text-white text-lg">Music</button>
            <p class="text-sm text-gray-400">6 Dec 2023</p>
          </div>
          <p class="font-bold text-lg">Beyond the Beats: Kanye's Musical Innovations</p>
        </div>
        <div class="bg-white py-6 px-4 cursor-pointer mb-4 md:mb-0">
          <img alt="" src="/blog-posts/3.jpg" class="mb-3 object-cover h-80 w-full md:h-64"/>
          <div class="flex justify-between items-center mb-4">
            <button class="py-2 px-4 rounded-3xl bg-blue-500 text-white text-lg">Fashion</button>
            <p class="text-sm text-gray-400">6 Dec 2023</p>
          </div>
          <p class="font-bold text-lg">Revolutionizing Rap: The Kanye Chronicles</p>
        </div>

      </div>
      <div class="bg-white py-4 px-4 flex flex-col justify-between cursor-pointer mb-4 md:mb-0">
        <img alt="" src="/blog-posts/4.jpg" class="mb-3 object-cover h-80 w-full md:h-full"/>
        <div class="pb-5">
          <div class="flex justify-between items-center mb-4">
            <button class="py-2 px-4 rounded-3xl bg-red-500 text-white text-lg">Controversies</button>
            <p class="text-sm text-gray-400">6 Dec 2023</p>
          </div>
          <p class="font-bold text-lg">Kanye West: The Unfiltered Truth Behind the Controversies</p>
        </div>
      </div>
    </div>
  </div>
</template>