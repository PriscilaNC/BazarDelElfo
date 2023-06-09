<template>
<div>
  <NavBar/>
<CarouselComponent/>
  <HeaderComponent/>
  <NavBar/>
</div>
</template>

<script>
import NavBar from '@/components/nav-bar.vue';
import CarouselComponent from '@/components/carousel-component.vue';
import HeaderComponent from '@/components/header-component.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavBar,CarouselComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
