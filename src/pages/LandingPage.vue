<template>
  <HeaderComponent/>
  <NavBar/>
  <CarouselComponent/>
</template>

<script>
import NavBar from '@/components/nav-bar.vue';
import CarouselComponent from '@/components/carousel-component.vue';
import HeaderComponent from '@/components/header-component.vue';

export default {
  name: 'LandingPage',
  components: {
    HeaderComponent,
    NavBar,CarouselComponent
}
}

</script>

<style>

</style>