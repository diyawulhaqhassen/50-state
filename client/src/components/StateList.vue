<template>
  <div>
    <StateSummary v-bind:states="states"></StateSummary>
  </div>
<div class="state-list-container">
  <div class="state-container" v-for="state in states" v-bind:key="state.name">
   <state-detail
       v-bind:state="state"
       v-on:update-visited="updateVisited"
   ></state-detail>
  </div>
</div>
</template>

<script>
import StateDetail from "@/components/StateDetail";
import StateSummary from "@/components/StateSummary";
export default {
  name: "StateList",
  components: {
    StateDetail,
    StateSummary
  },
  data(){
    return{
      states:[]
    }
  },
  mounted() {
    this.fetchAllStates()
  },
  methods:{
    fetchAllStates(){
      this.$stateService.getAllStates().then(states =>{
        this.states=states
      })
      .catch(err =>{
        alert('sorry,  can\'t fetch state list')
      })
    },
    updateVisited(stateName,visited){ // update visited state

      this.$stateService.setVisited(stateName,visited).then(()=>{
        this.fetchAllStates()
      }).catch(err =>{
        alert('sorry, can\'t update state')
        console.log(err)
      })

    }
  }
}
</script>

<style scoped>
.state-list-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.state-container{
  margin: 1rem;
}
</style>