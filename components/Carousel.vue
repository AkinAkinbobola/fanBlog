<script setup>

const imgArray = [];
for (let i = 1; i <= 20; i++) {
  imgArray.push(`${i}.jpg`);
}

</script>

<template>
  <div class="bg-whiteSmoke-0 font-poppins mb-16">
    <div class="text-center pt-10">
      <h1 class="text-3xl font-semibold mb-6">Follow on Instagram for more and join 100k others.</h1>
      <h3 class="text-lg mb-14">@SUPERSLIME</h3>
    </div>

    <Vue3Marquee
        :pause-on-hover="true"
    >
      <img
          v-for="img in imgArray"
          :key="img"
          :src="`/carousel/${img}`"
          class="h-60 w-80 object-cover bg-center mx-4"
          alt="Kanye Carousel"
      />
    </Vue3Marquee>
  </div>
</template>