import axios from "axios"

export const getData = (payload) => (dispatch) => {
    axios.get("https://fakestoreapi.com/products").then((response)=>{
        dispatch({
            type : "GET_DATA",
            payload : response.data,
        })
    }).catch((err)=>console.log(err))   
}

export const filter = (payload) => {
    return {
        type : "FILTER",
        payload,
    }
}