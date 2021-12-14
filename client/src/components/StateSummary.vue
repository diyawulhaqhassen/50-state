<template>

  <p> There are a total of  {{states.length}} states and the District of Columbia </p>
  <p>You have visited {{totalVisited}} {{units}}</p>

  <p v-if="areAllVisited" id ="all-Visited-message" > You have visited all the states and the District of Columbia! </p>
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
    },units(){

      if (this.totalVisited===1){
        return 'state'
      }else{
        return 'states'

      }
    },
    areAllVisited(){
      return this.totalVisited===this.states.length
    }
  }

}
</script>

<style scoped>
#all-Visited-message{
  color: purple;
  font-weight: 600;
  font-size: medium;
}
</style>