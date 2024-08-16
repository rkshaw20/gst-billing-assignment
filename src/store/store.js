import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import billReducer from "./slices/billSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    bill: billReducer,
  },
});

export default store;
