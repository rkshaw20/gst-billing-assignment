import { createSlice } from "@reduxjs/toolkit";

const initialProductState = { products: [] };

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (Product) => Product.id !== action.payload
      );
    },
  },
});
export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
