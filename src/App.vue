<template>
<div>
<NavBar/>
<CarouselRecomended/>

</div>
</template>

<script>
import NavBar from '@/components/nav-bar.vue';
import CarouselRecomended from '@/components/carrousel-recomended.vue'

export default {
  name: 'App',
  components: {
    NavBar, CarouselRecomended
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
