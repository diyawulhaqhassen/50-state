import axios from "axios";
import {state} from "pg/lib/native/query";

export  default {
    getAllStates(){ // get all states
        return axios.get('/api/states').then(response=>{
            return response.data
        })
    },
    setVisited(stateName,visited){ // get visited state

        // requesting state like


        // example URL api/state/Iowa
        let requestData={visited:visited}
        return axios.patch('/api/states/'+stateName,requestData).then(response =>{
            return response.data
        })
    },
    getOneState(stateName){
        return axios.get('/api/state/'+stateName).then(response=>{
            return response.data
        })
    },
    getStatesVisited(){
        return axios.get('/api/states_visited').then(response=>
        { return response.data})
    }
}