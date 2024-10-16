import { setProducts, setLoading } from "./ProductSlice";
import { fetchAllProducts } from "../services";

export const getAllProducts = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetchAllProducts(data);
    dispatch(setProducts(response.data.products));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};
