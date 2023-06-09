<template>
<div>
    <SideMenu/>
    <TableProducts/>
</div>
</template>

<script>
import TableProducts from '@/components/table-products.vue'
import SideMenu from '@/components/side-menu.vue'

export default {
  name: 'AdminPage',
  components: {
    TableProducts,
    SideMenu
  }
}
</script>

<style>

</style>