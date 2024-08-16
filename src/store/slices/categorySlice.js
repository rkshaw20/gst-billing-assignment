import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = { categories: [] };

const categorySlice = createSlice({
  name: "categories",
  initialState: initialCategoryState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});
export const { addCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;
