import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register",
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk("auth/login",
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk("auth/loguot",
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refresh = createAsyncThunk("auth/refresh",
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;
        if (!token)  return thunkAPI.rejectWithValue('Unable to fetch user');


        try {
            setAuthHeader(token);
            const responce = await axios.get('/users/current');
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);