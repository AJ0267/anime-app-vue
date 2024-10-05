<template>
  <a
    :href="anime.url"
    target="_blank"
    rel="noopener noreferrer"
    class="card bg-base-100 w-36 h-64 mx-2 mb-4 shadow-lg rounded-lg flex flex-col"
  >
    <figure class="flex-1 overflow-hidden rounded-t-lg">
      <img
        :src="
          anime.images?.jpg?.image_url || 'https://via.placeholder.com/150x250'
        "
        alt="Anime Image"
        class="w-full h-full object-cover"
      />
    </figure>
    <p class="mb-2 ml-2 text-base-content">{{ anime.title }}</p>
    <!-- Dynamically display anime title -->
  </a>
</template>

<script setup>
import { defineProps } from "vue";

// Define props for the Card component
const props = defineProps({
  anime: {
    type: Object,
    required: true,
  },
});
</script>
