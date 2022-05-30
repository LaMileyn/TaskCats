import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICats} from "../../types/Cats/types";

interface ICatsData {
    catsDataArray : ICats[],
    favouriteCats : ICats[]
    isLoading : boolean,
    error : string | null,
    totalCatsItems : number
}


const initialState : ICatsData  = {
    catsDataArray : [],
    favouriteCats : localStorage.getItem('favorites') ? JSON.parse(String(localStorage.getItem('favorites'))) : [],
    isLoading : false,
    error : null,
    totalCatsItems : 0
}
interface ISetCatsDataAction{
    catsArray : ICats[],
    totalCatsCount : number
}

export const catsSlice = createSlice({
    name : "catsData",
    initialState,
    reducers : {
        // состояния загрузки
        setFetching : (state ,action : PayloadAction<boolean> ) => {
            state.isLoading = action.payload
        },
        // добавление данных
        setCatsData : (state ,action : PayloadAction<ISetCatsDataAction> ) => {
            state.catsDataArray.push(...action.payload.catsArray)
            state.totalCatsItems = action.payload.totalCatsCount
            state.isLoading = false
        },
        // ошибка
        setError : (state ,action : PayloadAction<string> ) => {
            state.isLoading = false
            state.error = action.payload
        },
        // добавление в "любимые" и добавление в LocalStorage
        addToFavoruites : ( state, action : PayloadAction<ICats>) => {
            state.favouriteCats.push(action.payload)
            localStorage.setItem('favorites',JSON.stringify(state.favouriteCats))
        },
        // удаление из "любимых" и удаление из LocalStorage
        removeFromFavoruites : ( state, action : PayloadAction<number>) => {
            state.favouriteCats = state.favouriteCats.filter( el => el.id !== action.payload)
            localStorage.setItem('favorites',JSON.stringify(state.favouriteCats))
        }

    }
})

export const { setFetching, setCatsData, setError, addToFavoruites, removeFromFavoruites } = catsSlice.actions
export default catsSlice.reducer;