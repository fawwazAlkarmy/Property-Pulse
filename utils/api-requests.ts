import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

export const getProperties = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const response = await axios.get(`${apiDomain}/properties`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};
