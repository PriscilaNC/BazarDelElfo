<template>
<div>
  <Ganancias/>
  <CreateProduct/>
</div>
</template>

<script>
import Ganancias from '@/components/table-ganacias.vue'
import CreateProduct from '@/components/create-product.vue'

export default {
  name: 'AdminPage',
  components: {
    Ganancias,
    CreateProduct
  },
  data() {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        images: [],
        stock: 0

      }
    }
  }
};

</script>

<style>

</style>