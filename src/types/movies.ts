export interface IMovies {
  _id: string;
  slug: string;
  name: string;
  origin_name: string;
  type: string;
  poster_url: string;
  genres: IGenre[];
  thumb_url: string;
  lang: string;
  chieurap: string;
  time: string;
  quality: string;
  year: string;
  actor: string[];
  content: string;
  director: string;
  serverData: IServerData[];
}
export interface IGenre {
  _id: string;
  name: string;
  description: string;
}
export interface IServerDataItem {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
export interface IServerData {
  server_name: string;
  server_data: IServerDataItem[];
}
export interface LoaderData {
  genres: IGenre[];
  movies: IMovies[];
  cartoons: IMovies[];
  newMovies: IMovies[];
}
export interface MovieDetailResponse {
  movies: IMovies[];
}
export interface FormSubmit {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
}
export interface BreadcrumbItem {
  label: string;
  path: string;
}
export interface LoaderParams {
  params: {
    slug?: string;
    category?: string;
  };
}
