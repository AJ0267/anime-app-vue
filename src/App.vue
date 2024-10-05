<template  data-theme="lofi">
  <div>
    <div class="navbar bg-base-100 mb-4 shadow-md">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">AnimeHQ</a>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="search anime"
            class="input input-bordered w-32 md:w-auto"
            v-model="search_query"
          />
        </div>
        <button @click="HandleSearch" class="btn btn-primary">Go</button>
      </div>
    </div>

    <div class="flex flex-wrap justify-start mt-2 ml-4">
      <TheCard
        v-for="anime in animelist"
        :key="anime.title"
        :anime="anime"
        class="mx-2 mb-4"
      />
    </div>

    <div class="fixed bottom-12 right-4">
      <theme-control
        class="bg-transparent border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheCard from "./components/TheCard.vue";
import axios from "axios";
import ThemeControl from "./components/UI/ThemeControl.vue";

const search_query = ref("");
const animelist = ref([]);

// Define the HandleSearch function
const HandleSearch = async () => {
  if (search_query.value.trim() === "") return; // Avoid empty searches

  const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
    search_query.value
  )}&sfw=true`; // Construct the URL with the query

  try {
    const response = await axios.get(url); // Use the constructed URL for the GET request
    console.log(response.data); // Log the response data for inspection
    animelist.value = response.data.data || []; // Store the results in animelist
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
  }

  search_query.value = ""; // Clear the input after the search
};
</script>

<style></style>
