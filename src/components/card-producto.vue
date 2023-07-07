<template>
  <div class="card" style="width: 18rem;" > 
  <img v-bind:src=images[0] class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <p class="card-text">{{ price }}</p>
    <a class="btn btn-primary" href="#">Añadir al carro</a>
  </div>
</div>
</template>

<script>

export default { 

    name: 'CardProducts',
    props:{
     images:[],
     name:{type:String},
     price:{type:Number}
    },


}

</script>

<style>

</style>