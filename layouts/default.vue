<script setup>

import MaterialSymbolsRssFeed from "~/components/Icons/Rss.vue";
import Fa6BrandsFacebookF from "~/components/Icons/Facebook.vue";
import Fa6BrandsInstagram from "~/components/Icons/Instagram.vue";
import MaterialSymbolsMail from "~/components/Icons/Mail.vue";
import PhMagnifyingGlass from "~/components/Icons/Search.vue";
</script>

<template>
  <div>
    <nav class="container mx-auto p-4 flex justify-between">
      <div class="text-4xl">
        <NuxtLink class="font-bold font-ubuntu cursor-pointer">
          <p>FLAWLESS</p>
        </NuxtLink>
      </div>
      <div class="font-semibold hidden lg:flex gap-6 items-center">
        <NuxtLink to="/" class="py-1">Home</NuxtLink>
        <NuxtLink to="/about" class="py-1">About</NuxtLink>
        <NuxtLink to="/blog" class="py-1">Blog</NuxtLink>
        <NuxtLink to="/contact" class="py-1">Contact</NuxtLink>
        <div class="border-r-2 border-black h-5"></div>
        <MaterialSymbolsRssFeed/>
        <Fa6BrandsFacebookF/>
        <Fa6BrandsInstagram/>
        <MaterialSymbolsMail/>
        <PhMagnifyingGlass/>
      </div>


    </nav>
    <slot></slot>
  </div>
</template>