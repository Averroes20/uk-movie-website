<template>
  <div>
    <div v-if="loading" class="flex">
      <div
        class="border border-white-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-96"
      >
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-white h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-white rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-white rounded col-span-2"></div>
                <div class="h-2 bg-white rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-white-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-96"
      >
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-white h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-white rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-white rounded col-span-2"></div>
                <div class="h-2 bg-white rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-white-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-96"
      >
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-white h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-white rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-white rounded col-span-2"></div>
                <div class="h-2 bg-white rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="!loading && !error">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="movie in data" :key="movie.id">
          <div
            class="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-blue-500/50"
            @click="viewDetail(movie)"
          >
            <img
              class="w-full align-middle rounded-t-lg"
              style="width: 300px"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="movie.title || movie.name"
            />
            <!-- <blockquote class="relative p-8 mb-4"> -->
              <h4 class="text-xl font-bold text-white">
                {{ movie.title || movie.name }}
              </h4>
              <p class="text-md font-light mt-2 text-white text-left ml-3">
                Type: {{ movie.media_type }}
              </p>
              <p class="text-md font-light mt-2 text-white text-left ml-3">
                Popularity: {{ movie.popularity }}
              </p>
            <!-- </blockquote> -->
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        Previous
      </button>
      <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "CardComponent",
  computed: {
    ...mapState("movie", ["data", "loading", "error"]),
    ...mapGetters("movie", ["totalPages", "currentPage"]),
  },
  methods: {
    ...mapActions("movie", ["fetchData", "setCurrentPage"]),
    nextPage() {
      this.setCurrentPage(this.currentPage + 1);
    },
    prevPage() {
      this.setCurrentPage(this.currentPage - 1);
    },
    viewDetail(movie) {
      this.$store.commit("movie/SET_DETAIL_DATA", movie);
      this.$router.push({ name: "MovieDetail", params: { id: movie.id } });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: auto;
}
.text-limit {
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
