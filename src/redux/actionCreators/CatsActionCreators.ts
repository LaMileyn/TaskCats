import {Dispatch} from "@reduxjs/toolkit";
import {setCatsData, setError, setFetching} from "../reducers/CatsReducer";
import axios from "axios";
import {ICats} from "../../types/Cats/types";


export const getAllCats = (limit : number) => async (dispatch : Dispatch)  => {
    try{

        dispatch(setFetching(true))
        const data = await axios.get<ICats[]>("https://api.thecatapi.com/v1/images/search", {
            headers: {
                'x-api-key': "a73f1873-844c-4421-9b25-999132a6053c"
            },
            params: {
                limit
            }
        })
        const catsArray = data.data
        const totalCatsCount = Number(data.headers['pagination-count'])
        dispatch(setCatsData( { catsArray, totalCatsCount}))

    }catch ( error : any){
        dispatch(setError(error.message))
    }
}