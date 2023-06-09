<template>
<div>
    <SideMenu/>
    <TableProducts/>
    <CreateProduct/>
</div>
</template>

<script>
import TableProducts from '@/components/table-products.vue'
import SideMenu from '@/components/side-menu.vue'
import CreateProduct from '@/components/create-product.vue'

export default {
  name: 'AdminPage',
  components: {
    TableProducts,
    SideMenu,
    CreateProduct
  }
}
</script>

<style>

</style>