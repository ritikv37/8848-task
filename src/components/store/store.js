import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./list/listSlice";
import userReducer from "./user/userSlice"

const store = configureStore({
    reducer: {
        list: listReducer,
        user: userReducer
    }
})
export default store