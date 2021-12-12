<template>

  <div class="state-map">

    <h2>The state of {{state.name}}</h2>

    <p v-if="state.visited"> You have visited this state  </p>
   <p v-else>You have not visited this state yet</p>

    <div id="map-container" v-if="dataReady">
      <l-map
          ref="map"
          v-on:ready="onMapReady"
          v-bind:zoom="state.zoom"
          v-bind:center="mapCenter"
          >
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=" & copy;OpenStreetMap contributors">

        </l-tile-layer>
      </l-map>
    </div>

  </div>
</template>

<script>

import {LMap,LTileLayer} from '@vue-leaflet/vue-leaflet'
export default {
  name: "StateMap",
  components:{
    LMap,LTileLayer
  },
  data(){
    return{
      state:{},
      dataReady:false,// false until the api call complete
      mapReady:false
    }


  },mounted() {
    this.state.name=this.$route.params.state
    this.fetchStateData()
  },methods:{
    fetchStateData(){
      this.$stateService.getOneState(this.state.name).then(state=>{
        this.state=state
        this.dataReady=true


      }).catch(err =>{

        // if 404 not found error
        if(err.response && err.response.status ===404){
          this.state.name='?'
        }
        // otherwise the error is 500 server error send general message
        else {
          alert('sorry,error fetching data about this state')
          console.error(err)
        }
      })
    },
    onMapReady(){
      this.mapReady=true
      this.setMapView()
    },
    setMapView(){// to show the right zoom level of the state
      if(this.mapReady && this.dataReady){
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
      }
    }
  },
  computed:{
    mapCenter(){
      return [this.state.lat, this.state.lon]
    }
  }

}
</script>

<style scoped>
#map-container{
  height: 30em;
}
</style>