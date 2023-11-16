import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>{
        builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.fulfilled, (state, action) => console.log(action))
        .addCase(register.rejected, (state, action) => state)
    }
});

export const authReducer = authSlice.reducer; 