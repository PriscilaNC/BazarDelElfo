<template>
  <div >
    <Cardproduct v-for="product in products" v-bind:key="product.id"/>
  </div>
</template>

<script>
import {products} from '../components/card-producto.vue';
import CardProduct from '../components/card-producto.vue';

export default {
  name: 'MarketPlace',
  components: { CardProduct}
}
</script>

<style>

</style>