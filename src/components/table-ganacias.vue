<template>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Julio</td>
      <td>{{ price*cuantity }}</td>
    </tr>
  </tbody>
</table>
</template>
  
<script>
  
  export default { 
  
      name: 'TableGanancias',
      props:{
       price:{type:Number},
       cuantity:{type:Number},
      },
  
  
  }
  
</script>
  
<style>
  
</style>