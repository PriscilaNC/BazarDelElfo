<template>
    <HeaderComponent/>
    <NavBar/>
    <div v-for="product in products" v-bind:key="product.id">
      <CardShoppingCart :name="product.name" :price="product.price" :images="product.images"/>
    </div>
  </template>
  
  <script>
  import { fetchProductsData } from '../service/product.service.js'
  import CardShoppingCart from '../components/card-shopping-cart.vue';
  import HeaderComponent from '../components/header-component.vue';
  import NavBar from '../components/nav-bar.vue';
  
  export default {
    name: 'ShoppingCart',
    components: { CardShoppingCart, HeaderComponent, NavBar},
    data() {
      return {
        products:[],
  
      };
    },
    mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
      async fetchDataFromAPI() {
      try {
        const response = await fetchProductsData();
        this.products = response
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    },
  }
};
  
  </script>
  
  <style>
  
  </style>