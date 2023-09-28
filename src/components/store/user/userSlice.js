import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, specificUser, updateUser } from "./action";

const initialState = {
    user: {},
    login:[],
    isloading: true,
    error: null,
    success: null
}

const userList = createSlice({
    name: "lists",
    initialState,
    reducers: {},
    extraReducers: {
        [LoginUser.pending]: (state) => {
            state.isloading = true
        },
        [LoginUser.fulfilled]: (state, action) => {
            state.isloading = false;
            state.login = action.payload
        },
        [LoginUser.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload
        },
        [specificUser.pending]: (state) => {
            state.isloading = true
        },
        [specificUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isloading = false;
        },
        [specificUser.rejected]: (state, action) => {
            state.error = action.payload
            state.isloading = false;
        },
        [updateUser.pending]: (state) => {
            state.isloading = true
        },
        [updateUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isloading = false;
        },
        [updateUser.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload
        }
    }
})

export default userList.reducer