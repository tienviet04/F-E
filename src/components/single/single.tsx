import React from "react";
import { Link } from "react-router-dom";
import { IMovies } from "../../types/movies";

interface SingleProps {
  movie: IMovies;
}

const Single: React.FC<SingleProps> = ({ movie }) => {
  return (
    <>
      <div className="relative block h-64 w-full sm:h-80 lg:h-96 max-lg:hidden ">
        <Link
          key={movie._id}
          to={"/movies/" + movie.slug}
          className="group relative block h-full"
        >
          <span className="absolute inset-0 border-2 border-dashed"></span>
          <div className="relative flex h-full transform border-2 border-black bg-[#1a1a1a] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="w-full p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6">
              <div>
                <div className="pt-8">
                  <img
                    src={movie.poster_url}
                    alt={movie.name}
                    className="w-[196px] h-[224px]"
                  />
                </div>
                <div className="w-[180px] overflow-hidden">
                  <h2 className="truncate mt-4 text-xl text-white font-medium sm:text-[15px]">
                    {movie.name}
                  </h2>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="rounded-3xl border-[#262626] border-2 flex items-center bg-[#141414]">
                    <i
                      className="fa-regular fa-clock pl-2"
                      style={{ color: " #ffffff" }}
                    ></i>
                    <p className="text-sm p-2 text-white font-medium">
                      {movie.time}
                    </p>
                  </div>
                  <div className="rounded-3xl border-[#262626] border-2 flex items-center bg-[#141414]">
                    <i
                      className="fa-solid fa-eye flex items-center pl-2"
                      style={{ color: " #ffffff" }}
                    ></i>
                    <p className="text-sm p-2 text-white font-medium">20k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                {movie.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white">
                Thể loại: {movie.genres.map((genre) => genre.name).join(" , ")}
              </p>
              <p className="mt-2 text-sm sm:text-base text-white">{movie.time}</p>
              <p className="mt-2 text-sm sm:text-base text-white">{movie.lang}</p>
              <p className="mt-2 text-sm sm:text-base text-white">{movie.year}</p>
              <div className="mt-8">
                <p className="hover:text-white hover:underline absolute bottom-5 text-sm text-[#898787] font-bold cursor-pointer flex items-center">
                  <p>View All</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <line x1={15} y1={16} x2={19} y2={12} />
                      <line x1={15} y1={8} x2={19} y2={12} />
                    </svg>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="w-full h-full mx-auto pt-8">
          <div>
            <div
              id="slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            >
              <div className="bg-[#1a1a1a] p-3 rounded-lg">
                <div className=" w-full sm:w-auto">
                  <img
                    src={movie.poster_url}
                    alt="black chair and white table"
                    className="object-cover object-center mx-auto w-[196px] h-[224px] max-sm:w-[150px] max-sm:h-[170px]"
                  />
                  <div className=" py-4">
                    <div className="w-[100px] overflow-hidden">
                      <h2 className="truncate text-xl text-white font-medium max-sm:text-[12px]">
                        {movie.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
