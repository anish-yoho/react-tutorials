import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setProducts, setLoading } = ProductSlice.actions;
export default ProductSlice.reducer;
