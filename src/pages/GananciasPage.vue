<template>
    <HeaderComponent/>
    <NavBar/>
    <TableGanacias/>
  </template>
  
  <script>
  import NavBar from '@/components/nav-bar.vue';
  import HeaderComponent from '@/components/header-component.vue';
  import TableGanacias from '@/components/table-ganacias.vue';
  
  export default {
    name: 'LandingPage',
    components: {
      HeaderComponent,
      NavBar,TableGanacias
  }
  }
  
  </script>
  
  <style>
  
  </style>