<template>
<div>
  <header-component/>
  <NavBar/>
</div>
</template>

<script>  
import headerComponent from "./components/header-component.vue"
import NavBar from "./components/nav-bar.vue";


export default {
  name: 'App',
  components: {
    headerComponent,
    NavBar
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
