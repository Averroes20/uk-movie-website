<template>
  <div class="container background-image h-screen overflow-auto">
    <div class="">
      <div
        class="header relative pt-16 items-top flex h-screen bg-gradient-to-r from-black/70 to-green-500/20 max-h-860-px ml-64"
      >
        <div class="container mx-auto items-top flex flex-wrap mx-5">
          <div class="w-full">
            <div class="pt-32 sm:pt-0">
              <div class="container mx-auto px-4" v-if="detailData">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-"
                >
                  <div class="px-6">
                    <div class="flex flex-wrap justify-center">
                      <div
                        class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                      >
                        <div class="relative">
                          <img
                            :src="`https://image.tmdb.org/t/p/w500${detailData.poster_path}`"
                            :alt="detailData.title || detailData.name"
                            class="shadow-xl rounded-md h-auto align-middle border-none -m-8 -ml-2 lg:-ml-4 max-w-18-px"
                          />
                        </div>
                      </div>
                      <div
                        class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                      >
                      </div>
                      <div class="w-full lg:w-4/12 px-4 lg:order-1">
                        <div class="flex justify-center py-4 lg:pt-4 pt-8">
                          <div class="mr-4 p-3 text-center">
                            <span
                              class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            >
                            {{ detailData.popularity }}
                            </span>
                            <span class="text-sm text-blueGray-400"
                              >Popularity</span
                            >
                          </div>
                          <div class="mr-4 p-3 text-center">
                            <span
                              class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            >
                            {{ detailData.vote_average }}
                            </span>
                            <span class="text-sm text-blueGray-400"
                              >Rata-rata Vote</span
                            >
                          </div>
                          <div class="lg:mr-4 p-3 text-center">
                            <span
                              class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                            >
                            {{ detailData.vote_count }}
                            </span>
                            <span class="text-sm text-blueGray-400"
                              >Jumlah Vote</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center mt-12">
                      <h3
                        class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                      >
                        {{ detailData.title || detailData.name }}
                      </h3>
                      <div
                        class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                      >
                        <i
                          class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                        ></i>
                        Original Title: {{ detailData.original_title }}
                      </div>
                      <div class="mb-2 text-blueGray-600 mt-10">
                        <i
                          class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                        ></i>
                        Media Type - {{ detailData.media_type }}
                      </div>
                      <div class="mb-2 text-blueGray-600">
                        <i
                          class="fas fa-university mr-2 text-lg text-blueGray-400"
                        ></i>
                        Release Date - {{ detailData.release_date }}
                      </div>
                    </div>
                    <div
                      class="mt-5 py-10 border-t border-blueGray-200 text-center"
                    >
                      <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-9/12 px-4">
                          <p
                            class="text-lg leading-relaxed text-blueGray-700"
                          >
                          {{ detailData.overview }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SidebarComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/SidebarComponent";
import { mapState } from "vuex";

export default {
  name: "MovieDetail",
  computed: {
    ...mapState("movie", ["detailData"]),
  },
  components: {
    SidebarComponent,
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../../assets/cinema.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
