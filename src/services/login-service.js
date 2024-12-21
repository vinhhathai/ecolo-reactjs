import axios from "axios";

export const login = async (data) => {
  console.log(process.env.REACT_APP_API_LINK_HOST);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_LINK_HOST}/api/Account/SignIn`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
