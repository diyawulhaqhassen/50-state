import axios from "axios";
import {state} from "pg/lib/native/query";

export  default {
    getAllStates(){
        return axios.get('/api/states').then(response=>{
            return response.data
        })
    },
    setVisited(stateName,visited){

        // requesting state like


        // example URL api/state/Iowa
        let requestData={visited:visited}
        return axios.patch('/api/states/'+stateName,requestData).then(response =>{
            return response.data
        })
    }
}