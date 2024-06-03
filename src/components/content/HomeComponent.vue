<template>
  <div class="relative overflow-hidden">
    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-6xl text-left"
          >
            The Movie Website are Here
          </h1>
          <p class="mt-4 text-xl text-gray-400 text-left">
            Ini merupakan sebuah inovasi untuk mengembangkan website film yang
            diambil dari berbagai producer di dalamnya
          </p>
        </div>
        <div>
          <div class="mt-10">
            <div
              aria-hidden="true"
              class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    v-for="result in results"
                    :key="result.id"
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        :src="
                          'https://image.tmdb.org/t/p/original' +
                          result.backdrop_path
                        "
                        :alt="result.title || result.name"
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <router-link
              to="/trending"
              class="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mr-96"
              >Browse</router-link
            >
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeComponent",
  data() {
    return {
      results: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day",
        {
          params: {
            language: "en-US",
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2IyMDRkNjhhMWFkYjZiOTAwMTcyYWQ1ZWRiMWZmMSIsInN1YiI6IjY2NWMxZTE4NDk1NjM0MjVjMWM2ZTA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RA3YLOViy0GHPxazGfi8AZWOg-o-1ZMEfasd3Cl4JYo",
          },
        }
      );
      this.results = response.data.results;
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  },
};
</script>
