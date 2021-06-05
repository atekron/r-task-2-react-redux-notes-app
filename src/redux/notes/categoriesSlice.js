import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "Task",
  "Random Thought",
  "Idea",
  "Quote",
  "Shoping List",
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {},
    removeCategory: (state, action) => {},
  },
});

export const categoriesList = (state) => state.categories;

export const { addCategory, removeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
