<template>
  <div
      v-for="index in 3"
      :key="index"
      class="py-4 rounded border border-gray-300 md:p-6 bg-gray-200 flex flex-col md:flex-row md:items-center justify-center
       mb-10"
  >
    <SearchSkeletonLoader class="h-48 md:w-1/3 md:mr-6 m-4"></SearchSkeletonLoader>
    <div class="flex flex-col md:w-3/4 m-4">
      <SearchSkeletonLoader class="w-full h-8"></SearchSkeletonLoader>
      <SearchSkeletonLoader class="w-full h-8 mt-6"></SearchSkeletonLoader>
      <div class="flex justify-between mt-10">
        <SearchSkeletonLoader class="h-10 w-20 rounded-full"></SearchSkeletonLoader>
        <SearchSkeletonLoader class="h-10 w-20 rounded-lg"></SearchSkeletonLoader>
      </div>
    </div>
  </div>
</template>