import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.API_LINK_HOST}/api/Account/SignIn`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
