<script setup>

import MaterialSymbolsRssFeed from "~/components/Icons/Rss.vue";
import Fa6BrandsInstagram from "~/components/Icons/Instagram.vue";
import PhMagnifyingGlass from "~/components/Icons/Search.vue";
import Fa6BrandsFacebookF from "~/components/Icons/Facebook.vue";
import MaterialSymbolsMail from "~/components/Icons/Mail.vue";
import Fa6BrandsTwitter from "~/components/Icons/Twitter.vue";
</script>

<template>
  <div
      class="md:grid md:grid-cols-3 md:pt-2 md:pb-16 md:px-16 border-black border-b-2 gap-16 flex flex-col px-2 py-2 justify-center pb-8">
    <div>
      <h1 class="text-2xl font-ubuntu mb-3 md:border-none border-b border-gray-400 p-2 md:p-0 md:w-fit w-full">FLAWLESS</h1>
      <p class="font-xs md:font-sm font-medium md:mb-4 mb-6 md:w-fit w-full">
        Subscribe now for the latest updates, special offers, and
        exciting news delivered directly to your inbox!
      </p>
      <div class="rounded-3xl overflow-hidden bg-gray-300 flex justify-between items-center md:w-fit w-full">
        <input type="email" placeholder="Your email" class="bg-gray-300 p-2 outline-none ml-2">
        <button class="bg-primaryShade3-0 text-white py-3 px-8 rounded-full">Subscribe</button>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between font-medium">
      <p class="mb-4">About</p>
      <p class="mb-4">Blog</p>
      <p>Contact</p>
    </div>

    <div class="md:flex md:flex-col md:justify-between">
      <div class="border-b-2 border-black items-center justify-between w-2/3 ml-auto hidden md:flex">
        <input type="search" placeholder="type here..." class="pb-2 outline-none">
        <PhMagnifyingGlass/>
      </div>
      <div class="flex gap-10 self-end">
        <MaterialSymbolsRssFeed/>
        <Fa6BrandsFacebookF/>
        <Fa6BrandsInstagram/>
        <Fa6BrandsTwitter/>
        <MaterialSymbolsMail/>
      </div>
    </div>
  </div>
</template>