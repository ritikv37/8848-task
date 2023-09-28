import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const GetList = createAsyncThunk(
    "GetList",
    async (args, { rejectWithValue }) => {
        const headers = {
            'Content-Type': '',
            'Authorization': localStorage.getItem("token")
        }
        try {
            const { data } = await axios.get(`https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user`, {
                headers: headers
            })
            const user = data.message.data
            return user
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
