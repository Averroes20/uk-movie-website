<template>
  <div class="container background-image h-screen overflow-auto">
    <div class="">
      <div
      class="header relative pt-16 items-top flex h-screen bg-gradient-to-r from-black/70 to-green-500/20 max-h-860-px ml-64"
      >
      <div class="container mx-auto items-top flex flex-wrap mx-5">
        <div class="w-full">
          <div class="pt-32 sm:pt-0">
            <h1 class="font-semibold text-4xl text-blueGray-600 text-left text-white">
              Found All Of the Film You Want in Here
            </h1>
            <p class="mt-4 text-lg text-blueGray-200 text-left max-w-screen-md mb-5 text-white">
              Pada halaman ini anda dapat melihat berbagai macan film kesukaan anda. Ini adalah film-film terbaru sesuai dengan trending topic pada hari ini.
            </p>
            <CardComponent/>
          </div>
        </div>
      </div>
    </div>
      <SidebarComponent/>
    </div>
  </div>
</template>

<script>
  import CardComponent from '@/components/cards/CardComponent';
import SidebarComponent from '@/components/sidebar/SidebarComponent';

  export default {
    name: 'TrendingView',
    components: {
      SidebarComponent,
      CardComponent
    }
  }
</script>

<style scoped>
.background-image {
  background-image: url('../assets/cinema.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>