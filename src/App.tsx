import { createBrowserRouter } from "react-router-dom";

import Movies from "./pages/movies/movies";
import { getGenre } from "./api/genre";
import {
  getAllDetail,
  getMovies,
  getMoviesCartoon,
  getMoviesCartoonDetail,
  getMoviesCartoonPaginated,
  getMoviesDetail,
  getMoviesNew,
  getMoviesNewDetail,
  getMoviesNewPaginated,
  getMoviesPaginated,
} from "./api/movies";
import Detail from "./pages/detailMovies/detail";
import { IMovies, LoaderParams } from "./types/movies";
import TheLoai from "./pages/genre/genre";
import Support from "./pages/support/support";
import Subcription from "./pages/subcription/subcription";
import { Login } from "./pages/login/login";
import RegisterComponent from "./components/register/register";
import WatchMovie from "./pages/watchMovies/watchMovies";
import LayOut from "./pages/Layout/LayOut";
import { Home } from "./pages/home";
import GenreCartoon from "./pages/Cartoon/genreCartoon";
import GenreNew from "./pages/NewMovies/GenreNew";
import FillterMovies from "./pages/FillterMovies/FillterMovies";


// const getDetailLoader = async ({ params }: LoaderParams): Promise<{ movieDetail: IMovies }> => {
//   const { slug, category } = params;

//   if (!slug || !category) {
//     throw new Error("Movie ID and category are required");
//   }

//   let movieDetail: IMovies;

//   switch (category) {
//     case 'phim-le':
//       const { data: movieData } = await getMoviesDetail(slug);
//       movieDetail = movieData;
//       break;
//     case 'phim-hoat-hinh':
//       const { data: cartoonData } = await getMoviesCartoonDetail(slug);
//       movieDetail = cartoonData;
//       break;
//     case 'phim-moi':
//       const { data: newMovieData } = await getMoviesNewDetail(slug);
//       movieDetail = newMovieData;
//       break;
//     default:
//       throw new Error("Category không hợp lệ");
//   }

//   return { movieDetail };
// };

export const routers = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "movies",
        children: [
          {
            path: "",
            loader: async () => {
              const [genreResponse, moviesResponse, cartoonsResponse, newMoviesResponse] = await Promise.all([
                getGenre(),
                getMovies(""),
                getMoviesCartoon(""),
                getMoviesNew(""),
              ]);

              return {
                genres: genreResponse.data,
                movies: moviesResponse.data,
                cartoons: cartoonsResponse.data,
                newMovies: newMoviesResponse.data,
              };
            },
            element: <Movies />,
          },
          {
            path: "phim-le",
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const page = parseInt(url.searchParams.get("page") || "1");
              const limit = parseInt(url.searchParams.get("limit") || "10");

              const [genreResponse, moviesResponse] = await Promise.all([
                getGenre(),
                getMoviesPaginated(page, limit),
              ]);
              return {
                genres: genreResponse.data,
                movies: moviesResponse.data,
                totalPages: moviesResponse.totalPages,
                currentPage: moviesResponse.currentPage,
              };
            },
            element: <TheLoai />,
          },
          {
            path: "phim-hoat-hinh",
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const page = parseInt(url.searchParams.get("page") || "1");
              const limit = parseInt(url.searchParams.get("limit") || "10");

              const [genreResponse, moviesResponse] = await Promise.all([
                getGenre(),
                getMoviesCartoonPaginated(page, limit),
              ]);
              return {
                genres: genreResponse.data,
                movies: moviesResponse.data,
                totalPages: moviesResponse.totalPages,
                currentPage: moviesResponse.currentPage,
              };
            },
            element: <GenreCartoon />,
          },
          {
            path: "phim-moi",
            loader: async ({ request }) => {
              const url = new URL(request.url);
              const page = parseInt(url.searchParams.get("page") || "1");
              const limit = parseInt(url.searchParams.get("limit") || "10");

              const [genreResponse, moviesResponse] = await Promise.all([
                getGenre(),
                getMoviesNewPaginated(page, limit),
              ]);
              return {
                genres: genreResponse.data,
                movies: moviesResponse.data,
                totalPages: moviesResponse.totalPages,
                currentPage: moviesResponse.currentPage,
              };
            },
            element: <GenreNew />,
          },
          // {
          //   path: ":category/:slug",
          //   loader: getDetailLoader,
          //   element: <Detail />,
          // },
          {
            path: ":slug",
            loader: async ({ params }): Promise<IMovies> => {
              if (params.slug) {
                const { data: moviesDetail } = await getAllDetail(params.slug);
                return moviesDetail;
              }
              throw new Error("Movie ID is required");
            },
            element: <Detail />,
          },
          {
            path: "watch/:slug",
            loader: async ({ params }): Promise<IMovies> => {
              if (params.slug) {
                const { data: moviesDetail } = await getAllDetail(params.slug);
                return moviesDetail;
              }
              throw new Error("Movie ID is required");
            },
            element: <WatchMovie />,
          },
        ],
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "category",
        element: <FillterMovies />,
      },
      {
        path: "subcription",
        element: <Subcription />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <RegisterComponent />,
  },
]);
