<template>
  <table class="table p-3 m-auto" style="width: auto;">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" v-bind:key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <!-- Hardcode -->
      <td>1</td>
      <td>{{ product.price }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import datos from '../assets/hardcode-data.json'

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