import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};
export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPosts, setLoading } = PostSlice.actions;
export default PostSlice.reducer;
