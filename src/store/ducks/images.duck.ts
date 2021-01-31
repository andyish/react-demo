import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../app.state";

export interface ImagesState {}

export const initialImagesState: ImagesState = {};

const slice = createSlice({
    name: "images",
    initialState: initialImagesState,
    reducers: {
        reset: () => initialImagesState,
    },
    extraReducers: {},
});

export default slice.reducer;
export const { reset } = slice.actions;

// Selectors
export const selectImages = (state: AppState) => state.images;
