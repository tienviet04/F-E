import { IGenre } from "../types/movies";
import instance from "./interface";

export const getGenre = async (
  query: string = ""
): Promise<{ data: IGenre[] }> => {
  const uri = query ? `/genres?${query}` : "/genres";
  const response = await instance.get(uri);
  return response.data;
};
