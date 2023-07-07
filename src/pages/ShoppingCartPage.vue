<template>
    <HeaderComponent/>
    <NavBar/>
    <div v-for="product in products" v-bind:key="product.id">
      <CardShoppingCart :name="product.name" :price="product.price" :images="product.images"/>
    </div>
  </template>
  
  <script>
  import datos from '../assets/json/hardcode-data.json'
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
      this.verProducto();
    },
    methods: {
     verProducto() {
        
          this.products = datos.map((product) => {
              return product;
          })
        }
    },
  };
  
  </script>
  
  <style>
  
  </style>