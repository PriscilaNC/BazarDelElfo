<template>
  <HeaderComponent/>
  <NavBar/>
  <div v-for="product in products" v-bind:key="product.id">
    <CardProduct :name="product.name" :price="product.price" :images="product.images"/>
  </div>
</template>

<script>
import datos from '../assets/json/hardcode-data.json'
import CardProduct from '../components/card-producto.vue';
import HeaderComponent from '@/components/header-component.vue';
import NavBar from '@/components/nav-bar.vue';

export default {
  name: 'MarketPlace',
  components: { CardProduct, HeaderComponent, NavBar},
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