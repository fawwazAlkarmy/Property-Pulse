import axios from "axios";
import { IProperty } from "./types";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

export const getProperties = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const response = await axios.get<IProperty[]>(`${apiDomain}/properties`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

export const getProperty = async (id: string): Promise<IProperty | null> => {
  try {
    if (!apiDomain) {
      return null;
    }
    const response = await axios.get<IProperty>(
      `${apiDomain}/properties/${id}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
