<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-slate-900/75 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-white"
        to="/"
      >
        Filmku.Tv
      </router-link>
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 mt-24">
          <li class="inline-flex">
            <router-link
              to="/"
              class="text-blueGray-700 text-white text-sm block mb-4 no-underline font-semibold"
            >
              <i
                class="fas fa-paint-brush mr-2 text-blueGray-300 text-base"
              ></i>
              Home
            </router-link>
          </li>

          <li class="inline-flex mt-3">
            <router-link
              to="/trending"
              class="text-blueGray-700 text-white text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
              Trending
            </router-link>
          </li>

          <li class="inline-flex mt-3">
            <a
              href="#"
              class="text-blueGray-700 text-white text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
              Browse
            </a>
          </li>


          <li class="inline-flex mt-3">
            <a
              href="#"
              class="text-blueGray-700 text-white text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
              Saved
            </a>
          </li>

          <li class="inline-flex mt-3">
            <a
              href="#"
              class="text-blueGray-700 text-white text-sm block mb-4 no-underline font-semibold"
            >
              <i class="fab fa-react mr-2 text-blueGray-300 text-base"></i>
              Playlist
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "SidebarComponent",
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
  },
};
</script>
