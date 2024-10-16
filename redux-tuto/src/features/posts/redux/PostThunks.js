import { setLoading, setPosts } from "../redux/PostSlice";
import { fetchAllPosts } from "../services";

export const getAllPosts = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetchAllPosts(data);
    dispatch(setPosts(response.data.posts));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};
