import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Start from "../Start/start";
import Carouseled from "../carousel/silcarousel";
import Trending from "../trending-watch/trending";
import Watch from "../trending-watch/watch";
import New from "../trending-watch/NewMovies";
import Cartoon from "../trending-watch/Cartoon";
import { LoaderData } from "../../types/movies";

export default function BodyMovies() {
  const { genres, movies, cartoons, newMovies } = useLoaderData() as LoaderData;

  console.log("Genres data:", genres);
  console.log("Movies data:", movies);
  console.log("Cartoons data:", cartoons);
  console.log("New Movies data:", newMovies);

  return (
    <div>
      <div className="pb-24 max-xl:mx-4">
        <p className="text-white text-4xl font-bold mb-6 max-lg:text-2xl ">Thể loại</p>
        <Carouseled />
      </div>
      <div className="pb-24 max-xl:mx-4">
        <Link
          to={"/movies/phim-moi"}
          className="flex justify-between items-center"
        >
          <p className="text-white text-4xl font-bold hover:underline max-lg:text-2xl">
            Phim Mới
          </p>
          <div className="text-[#898787] hover:text-white text-lg font-medium hover:underline max-lg:text-sm ">
            Xem thêm...
          </div>
        </Link>
        <New movies={newMovies} />
      </div>
      <div className="pb-24 max-xl:mx-4">
        <Link
          to={"/movies/phim-hoat-hinh"}
          className="flex justify-between items-center"
        >
          <p className="text-white text-4xl font-bold hover:underline max-lg:text-2xl">
            Phim hoạt hình
          </p>
          <div className="text-[#898787] hover:text-white text-lg font-medium hover:underline max-lg:text-sm ">
            Xem thêm...
          </div>
        </Link>
        <Cartoon movies={cartoons} />
      </div>
      {/* <div className="pb-24">
        <Link
          to={"/movies/phim-le"}
          className="flex justify-between items-center"
        >
          <p className="text-white text-4xl font-bold hover:underline">
            Trending Now
          </p>
          <div className="text-[#898787] hover:text-white text-lg font-medium hover:underline ">
            Xem thêm...
          </div>
        </Link>
        <Trending movies={movies} />
      </div> */}
      <div className=" max-xl:mx-4">
        <p className="text-white text-4xl font-bold max-lg:text-2xl">Must-Watch Movies</p>
        <Watch />
      </div>
      <div>
        <Start />
      </div>
    </div>
  );
}
