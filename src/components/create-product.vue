<template>
  <div class="mt-5">
    <h3>Agregar producto</h3>
<form @submit="sendForm">
    <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre producto" v-model="product.name" required>
    </div>
    <div class="mb-3">
        <input type="number" class="form-control" placeholder="Precio" v-model="product.price" required>
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion" v-model="product.description"></textarea>
    </div>
    <div class="mb-3">
        <input type="text" class="form-control" id="linkarchivo" placeholder="Url imagen"  v-model="product.images"/>
    </div>
    <div class="mb-3">
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Stock" v-model="product.stock">
    </div>
    <button class="btn btn-success" type="submit">Guardar</button>
</form>
</div>
</template>

<script>
import { createProduct } from '@/service/product.service'
 
export default {
    data() {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        images: [],
        stock: 0
      }
    };
  },
  methods: {
    sendForm() {
      console.log(this.product)
      createProduct(this.product);

    }
  }
}


</script>

<style>

</style>