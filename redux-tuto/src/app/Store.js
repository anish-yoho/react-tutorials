import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/products/redux/ProductSlice";
import PostSlice from "../features/posts/redux/PostSlice";

const Store = configureStore({
  reducer: {
    products: ProductSlice,
    posts: PostSlice,
  },
});

export default Store;
