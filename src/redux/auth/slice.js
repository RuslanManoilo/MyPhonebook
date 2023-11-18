import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { logIn, logOut, refresh, register } from "./operations";

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
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refresh.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refresh.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refresh.rejected, state => {
            state.isRefreshing = false;
        })
    }
});

export const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = authSlice.reducer; 