import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesSlice";
import categoriesReducer from "./notes/categoriesSlice";

export default configureStore({
  reducer: {
    notes: notesReducer,
    categories: categoriesReducer,
  },
});
