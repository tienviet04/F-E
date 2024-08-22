import { IMovies } from "../types/movies";
import instance from "./interface";

export const getMovies = async (
  query: string = ""
): Promise<{ data: IMovies[] }> => {
  const uri = "/movies?" + query;
  const response = await instance.get(uri);
  return response.data;
};
export const getMoviesCartoon = async (
  query: string = ""
): Promise<{ data: IMovies[] }> => {
  const uri = "/cartoon?" + query;
  const response = await instance.get(uri);
  return response.data;
};
export const getMoviesNew = async (
  query: string = ""
): Promise<{ data: IMovies[] }> => {
  const uri = "/newmovies?" + query;
  const response = await instance.get(uri);
  return response.data;
};
export const getAllMovies = async (): Promise<{ data: IMovies[] }> => {
  const uri = "/movies/all";
  const response = await instance.get(uri);
  return response.data;
};
export const getAllMoviesCartoon = async (): Promise<{ data: IMovies[] }> => {
  const uri = "/cartoon/all";
  const response = await instance.get(uri);
  return response.data;
};
export const getAllMoviesNew = async (): Promise<{ data: IMovies[] }> => {
  const uri = "/newmovies/all";
  const response = await instance.get(uri);
  return response.data;
};
export const getMoviesPaginated = async (
  page: number,
  limit: number
): Promise<{ data: IMovies[]; totalPages: number; currentPage: number }> => {
  const response = await instance.get(`/movies?page=${page}&limit=${limit}`);
  return response.data;
};
export const getMoviesNewPaginated = async (
  page: number,
  limit: number
): Promise<{ data: IMovies[]; totalPages: number; currentPage: number }> => {
  const response = await instance.get(`/newmovies?page=${page}&limit=${limit}`);
  return response.data;
};
export const getMoviesCartoonPaginated = async (
  page: number,
  limit: number
): Promise<{ data: IMovies[]; totalPages: number; currentPage: number }> => {
  const response = await instance.get(`/cartoon?page=${page}&limit=${limit}`);
  return response.data;
};
export const getMoviesDetail = async (
  slug: string
): Promise<{ data: IMovies }> => {
  const response = await instance.get("/movies/" + slug);
  return response.data;
};
export const getMoviesCartoonDetail = async (
  slug: string
): Promise<{ data: IMovies }> => {
  const response = await instance.get("/cartoon/" + slug);
  return response.data;
};
export const getMoviesNewDetail = async (
  slug: string
): Promise<{ data: IMovies }> => {
  const response = await instance.get("/newmovies/" + slug);
  return response.data;
};
export const getAllDetail = async (
  slug: string
): Promise<{ data: IMovies }> => {
  const response = await instance.get("/all/" + slug);
  return response.data;
};
export const searchMovies = async (
  query: string
): Promise<{ data: IMovies[] }> => {
  const response = await instance.get(`/all/search?name=${query}`);
  return response.data;
};
// làm gộp tất cả các phim vào 1 base rồi làm hàm search từ base đấy
