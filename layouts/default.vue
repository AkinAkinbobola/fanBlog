<script setup>
import MaterialSymbolsRssFeed from "~/components/Icons/Rss.vue";
import Fa6BrandsFacebookF from "~/components/Icons/Facebook.vue";
import Fa6BrandsInstagram from "~/components/Icons/Instagram.vue";
import MaterialSymbolsMail from "~/components/Icons/Mail.vue";
import PhMagnifyingGlass from "~/components/Icons/Search.vue";
import Fa6BrandsTwitter from "~/components/Icons/Twitter.vue";
import MdiMenu from "~/components/Icons/Menu.vue";
import MingcuteCloseLine from "~/components/Icons/Cancel.vue";
import MaterialSymbolsLightMenuRounded from "~/components/Icons/Menu.vue";

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};
</script>

<template>
  <div>
    <nav class="flex items-center justify-between py-5 font-poppins px-10 border-b shadow-md">
      <div class="text-4xl">
        <NuxtLink class="font-bold font-ubuntu cursor-pointer" to="/">
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
        <NuxtLink to="/search" class="cursor-pointer border-none">
          <PhMagnifyingGlass/>
        </NuxtLink>
      </div>

      <div class="lg:hidden cursor-pointer" @click="toggleMenu">
        <MaterialSymbolsLightMenuRounded v-if="!menu" class="text-2xl"/>
        <MingcuteCloseLine v-else class="text-2xl"/>
      </div>


    </nav>
    <div v-if="menu" class="lg:hidden bg-white flex flex-col border-b border-black shadow-md p-8">
      <div class="">
        <NuxtLink class="border-none block py-2 px-4" to="/about">About</NuxtLink>
        <NuxtLink class="border-none block py-2 px-4" to="/blog">Blog</NuxtLink>
        <NuxtLink class="border-none block py-2 px-4" to="/contact">Contact</NuxtLink>
      </div>
      <div class="flex justify-between w-1/2 p-4 gap-4">
        <MaterialSymbolsRssFeed/>
        <Fa6BrandsFacebookF/>
        <Fa6BrandsInstagram/>
        <Fa6BrandsTwitter/>
        <MaterialSymbolsMail/>
      </div>
    </div>
    <slot></slot>
  </div>
</template>