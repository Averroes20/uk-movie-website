<template>
  <div class="container background-image h-screen overflow-auto">
    <div class="">
      <div
      class="header relative pt-16 items-top flex h-screen bg-gradient-to-r from-black/70 to-green-500/20 max-h-860-px ml-64"
      >
      <div class="container mx-auto items-top flex flex-wrap mx-5">
        <div class="w-full">
          <div class="pt-32 sm:pt-0">
            <HomeComponent/>
          </div>
        </div>
      </div>
    </div>
      <SidebarComponent/>
    </div>
  </div>
</template>

<script>
  // import CardComponent from '@/components/cards/CardComponent';
import SidebarComponent from '@/components/sidebar/SidebarComponent';
import HomeComponent from '@/components/content/HomeComponent';

  export default {
    name: 'HomeView',
    components: {
      SidebarComponent,
      // CardComponent,
      HomeComponent
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