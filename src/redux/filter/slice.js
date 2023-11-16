import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        currentFilter(_, action) {
            return action.payload;
        },
    }
});

export const filterReduser = filterSlice.reducer;
export const { currentFilter } = filterSlice.actions;