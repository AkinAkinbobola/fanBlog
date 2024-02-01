<script setup>
import MaterialSymbolsRssFeed from "~/components/Icons/Rss.vue";
import Fa6BrandsFacebookF from "~/components/Icons/Facebook.vue";
import Fa6BrandsInstagram from "~/components/Icons/Instagram.vue";
import MaterialSymbolsMail from "~/components/Icons/Mail.vue";
import PhMagnifyingGlass from "~/components/Icons/Search.vue";
import Fa6BrandsTwitter from "~/components/Icons/Twitter.vue";

const menu = ref(false);
const showSearch = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};
</script>

<template>
  <div>
    <nav class="py-4 px-6 flex justify-between">
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
        <Fa6BrandsTwitter/>
        <MaterialSymbolsMail/>
        <NuxtLink to="/search" class="cursor-pointer">
          <PhMagnifyingGlass/>
        </NuxtLink>
      </div>


    </nav>
    <slot></slot>
  </div>
</template>