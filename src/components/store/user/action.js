import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const LoginUser = createAsyncThunk(
    "LoginUser",
    async (userData, { rejectWithValue }) => {
        const headers = {
            'Content-Type': '',
            'Authorization': ''
        }
        try {
            const { data } = await axios.get(`https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token?usr=${userData.usr}&pwd=${userData.pwd}`, {
                headers: headers
            })
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const specificUser = createAsyncThunk(
    "specificUser",
    async (userData, { rejectWithValue }) => {
        const headers = {
            'Content-Type': '',
            'Authorization': localStorage.getItem("token")
        }
        try {
            const queryParams = { name1: userData };
            const { data } = await axios.get('https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific', {
                headers: headers,
                params: queryParams,
            });
            const user = data.message.data.specific_user[0]
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ userName, userData }, { rejectWithValue }) => {
        const headers = {
            'Content-Type': '',
            'Authorization': localStorage.getItem("token")
        }
        try {

            const response = await axios.put(`https://assignment.8848digitalerp.com/api/resource/Assignment/${userName}`, userData, {
                headers: headers,
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
