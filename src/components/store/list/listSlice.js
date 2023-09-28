import { createSlice } from "@reduxjs/toolkit";
import { GetList } from "./action";

const initialState = {
    list: {},
    lists: [],
    isloading: false,
    error: null,
    success: null
}

const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {},
    extraReducers: {
        [GetList.pending]: (state) => {
            state.isloading = true
        },
        [GetList.fulfilled]: (state, action) => {
            state.isloading = false;
            state.lists = action.payload
        },
        [GetList.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload
        }
    }
})

export default listSlice.reducer