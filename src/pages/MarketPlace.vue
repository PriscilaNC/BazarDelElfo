<template>
  <div v-for="product in products" v-bind:key="product.id">
    <CardProduct/>
  </div>
</template>

<script>
//import {products} from '../components/card-producto.vue';
import CardProduct from '../components/card-producto.vue';

export default {
  name: 'MarketPlace',
  components: { CardProduct},
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