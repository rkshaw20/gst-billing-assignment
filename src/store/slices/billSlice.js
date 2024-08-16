import { createSlice } from "@reduxjs/toolkit";

const initialBillState = { sales: [], bills: [] };

const BillSlice = createSlice({
  name: "bill",
  initialState: initialBillState,
  reducers: {
    addToSale: (state, action) => {
      const existingProduct = state.sales.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        // if the product is already in the bill increase its quantity
        existingProduct.qty += 1;
      } else {
        // otherwise add the product with a quantity of 1
        state.sales.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromSales: (state, action) => {
      state.sales = state.sales.filter((sale) => sale.id !== action.payload);
    },
    clearSales: (state) => {
      state.sales = [];
    },
    addToBill: (state, action) => {
      state.bills.push(action.payload);
    },
  },
});
export const { addToSale, removeFromSales, clearSales, addToBill } =
  BillSlice.actions;

export default BillSlice.reducer;
