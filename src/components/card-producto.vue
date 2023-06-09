<template>
  <div class="card" style="width: 18rem;" v-if="product">
  <img v-src="{{ product.images[0]}}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.price }}</p>
  </div>
</div>
</template>

<script>
import datos from '../assets/json/hardcode-data.json'
export default {

    name: 'TableProducts',

    computed: {
    products() {
        return datos.map((product) => {
            return product;
        })
    }
}
}

</script>

<style>

</style>