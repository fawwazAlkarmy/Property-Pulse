import axios from "axios";

export const getProperties = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
