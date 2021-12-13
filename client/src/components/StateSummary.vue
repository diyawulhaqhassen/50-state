<template>

  <p> There are {{states.length}} states visited</p>
  <p>{{totalVisited}}</p>
</template>

<script>
export default {
  name: "StateSummary",
  props:{
    states:Array
  },
  computed:{
    totalVisited(){
      let visitedCount=0
      this.states.forEach(state=>{
        if(state.visited){
          visitedCount++
        }
      })
      return visitedCount
    },
}
}
</script>

<style scoped>

</style>