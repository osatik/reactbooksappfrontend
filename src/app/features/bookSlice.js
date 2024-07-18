import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books:[],
    oneBook:{},
    loading:false,
    error:false,
}

const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        fetchStart:state=>{
            state.loading = true;
            state.error = false;
        },
        fetchFail:state=>{
            state.loading = false;
            state.error = true;
        },
        fetchSuccessGetAll:(state,{payload})=>{
            state.loading = false;
            state.books = payload;
        },
        fetchSuccessOneBook:(state,{payload})=>{
            state.loading = false;
            state.oneBook = payload;
        },
        fetchSuccessWithoutPayload : state=> state.loading = false,

    }
})

export const {fetchStart, fetchFail, fetchSuccessGetAll, fetchSuccessWithoutPayload, fetchSuccessOneBook,} = bookSlice.actions
export default bookSlice.reducer;