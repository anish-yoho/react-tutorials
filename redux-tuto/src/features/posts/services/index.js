import axios from "axios";

const API_END_POINT = process.env.REACT_APP_API_URL;
export const fetchAllPosts = async () => {
  try {
    const response = await axios.get(`${API_END_POINT}/posts`);
    return response;
  } catch (error) {
    console.log("error while fetching", error);
  }
};
