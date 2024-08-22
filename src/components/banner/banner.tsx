import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      <div>
        <img
          className="h-[712px] object-cover w-full"
          src="https://tiki.vn/blog/wp-content/uploads/2023/10/j9P1nMy9V-G6AK7MxfMHWfh0oVJ9Tle_DjAmGslED2DJKvC41e_ZtB6d7eH0t2XzlitWaW4bbexuqupobd8ytDrUqrQUVlouuhd1wTkgIJHmUsxV9Rlspqmh3MRQ1ooOMf3LAiKLIuoSsAlpHe9FiD0.png"
          alt="Banner"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="">
          <p className="text-white text-4xl font-bold flex justify-center py-4">
            Avengers : Endgame
          </p>
          <p className="block text-[#d4d4d4] text-lg font-medium justify-center max-w-5xl text-center overflow-hidden text-ellipsis whitespace-nowrap">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
        </div>

        <div className="absolute bottom-56 flex">
          <button className="p-2  text-lg text-white max-sm:text-xs bg-red-700 rounded-lg mr-4 ">
            <i
              className="fa-solid fa-play fa-xs pr-1"
              style={{ color: "#ffffff" }}
            ></i>
            Play Now
          </button>
          <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mr-2">
            <i
              className="fa-solid fa-thumbs-up"
              style={{ color: " #ffffff" }}
            ></i>
          </div>
          <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mr-2">
            <i className="fa-solid fa-plus" style={{ color: " #ffffff" }}></i>
          </div>
          <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
            <i
              className="fa-solid fa-volume-high"
              style={{ color: " #ffffff" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
