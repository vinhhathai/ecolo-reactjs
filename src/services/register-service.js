import axios from "axios";
export const register = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_LINK_HOST}/api/Account/SignUp`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };