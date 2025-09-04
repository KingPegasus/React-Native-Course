import { createSlice } from '@reduxjs/toolkit';

const favoriteMealsSlice = createSlice({
  name: 'favoriteMeals',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload.id);
    },
    removeFavorite(state, action) {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoriteMealsSlice.actions.addFavorite;
export const removeFavorite = favoriteMealsSlice.actions.removeFavorite;
export default favoriteMealsSlice.reducer;
