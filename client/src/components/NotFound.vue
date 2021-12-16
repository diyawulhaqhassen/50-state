<template>
  <div>
   <p id="not-found">
     Sorry,page not found.would you like to

     <router-link v-bind:to="{name:'StateList'}">
       go to home page
     </router-link>
   </p>




  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style>
#not-found{
  font-size: large;
}
</style>