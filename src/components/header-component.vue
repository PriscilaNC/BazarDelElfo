<template>
    <div>
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      <div class="col-md-3 mb-2 mb-md-0">
          <img src="..\assets\img\El_Bazar_del_Elfo_logo.png" style="height: 80px;">
      </div>

      <div class="col-md-3 text-end">
        <router-link type="button" class="btn btn-outline-primary me-2" to="/login_page">Login</router-link>
        <router-link type="button" class="btn btn-primary me-2" to="/register_page">Sign-up</router-link>
        <router-link type="button" class="btn btn-primary me-2" style="margin-right: 15px;" to="/register_page" >Carrito</router-link>
      </div>
    </header>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>