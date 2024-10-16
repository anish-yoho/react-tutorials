import axios from "axios";

const API_END_POINT = process.env.REACT_APP_API_URL;
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_END_POINT}/products`);
    return response;
  } catch (error) {
    console.log("error while fetching data", error);
  }
};
