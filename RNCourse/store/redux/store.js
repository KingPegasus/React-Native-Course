import { configureStore } from '@reduxjs/toolkit';
import { favoriteMealsReducer } from './favorites';

const store = configureStore({
  reducer: {
    favoriteMeals: favoriteMealsReducer,
  },
});

export default store;
