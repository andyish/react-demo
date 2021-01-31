import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Recipee } from '../../models/Recipee.model';
import { AppState } from '../app.state';

export interface RecipeeState {
  list: Recipee[];
}

export const initialRecipeeState: RecipeeState = {
  list: [],
};

export const loadRecipees = createAsyncThunk(
  'recipees/load',
  async (thunkAPI) => {
    try {
      const response = await fetch(
        'https://banana-data-bucket.s3-eu-west-1.amazonaws.com/react-demo/data.json'
      );
      return await response.json();
    } catch (err) {
      return [];
    }
  }
);

const slice = createSlice({
  name: 'recipees',
  initialState: initialRecipeeState,
  reducers: {
    reset: () => initialRecipeeState,
  },
  extraReducers: {
    // eslint-disable-next-line
    ['recipees/load/fulfilled']: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export default slice.reducer;
export const { reset } = slice.actions;

// Selectors
export const selectRecipeeList = (state: AppState) => state.recipees.list;
