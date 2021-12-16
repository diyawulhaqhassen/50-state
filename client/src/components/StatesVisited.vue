<template>
<div>
  <h2>States You Have Visited</h2>
    <p v-for="state in statesVisited" v-bind:key="state.name">

  {{state.name}}</p>

</div>
</template>

<script>
export default {
  name: "StatesVisited",
  data(){
    return {
      statesVisited:[]
    }
  },
  mounted() {
    this.$stateService.getStatesVisited().then(stateVisited=>{
      this.statesVisited=stateVisited
    }).catch(err =>{

      alert('sorry, unable to fetch list of states you have visited')

      console.log('error getting all states',err)
    })
  }
}
</script>

<style scoped>

</style>