<template>
  <HeaderComponent/>
  <NavBar/>
  <div v-for="product in products" v-bind:key="product.id">
    <CardProduct/>
  </div>
</template>

<script>
//import {products} from '../components/card-producto.vue';
import CardProduct from '../components/card-producto.vue';
import HeaderComponent from '@/components/header-component.vue';
import NavBar from '@/components/nav-bar.vue';

export default {
  name: 'MarketPlace',
  components: { CardProduct, HeaderComponent, NavBar},
  data() {
    return {
      product: Object,

    };
  },
  mounted() {
    this.verProducto();
  },
  methods: {
    async verProducto() {
        
    },
  },
};

</script>

<style>

</style>