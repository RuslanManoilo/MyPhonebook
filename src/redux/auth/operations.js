import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

export const register = createAsyncThunk("auth/register",
    async (credentials, thunkAPI) => {
        try {
            console.log(credentials);
            const responce = await axios.post('/users/signup', credentials);
            console.log(responce);

            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);