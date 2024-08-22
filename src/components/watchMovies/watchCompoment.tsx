import React, { useEffect, useState } from "react";
import { IMovies } from "../../types/movies";
import { BreadCumbs } from "../breadcrumb/breadcrumb";
import { useLoading } from "../../contexts/loadingContext";

interface WatchProps {
    movie: IMovies;
}

const WatchCompoment: React.FC<WatchProps> = ({ movie }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentEpisode, setCurrentEpisode] = React.useState(0);

    const linkEmbed =
        movie.serverData.length > 0 &&
            movie.serverData[0].server_data.length > 0 &&
            movie.serverData[0].server_data[currentEpisode].link_embed
            ? movie.serverData[0].server_data[currentEpisode].link_embed
            : "";

    const hasMultipleEpisodes =
        movie.serverData.length > 0 && movie.serverData[0].server_data.length > 1;

    const handleEpisodeClick = (index: number) => {
        setIsLoading(true);
        setCurrentEpisode(index);
        // Simulate a loading delay
        setTimeout(() => setIsLoading(false), 500);
    };

    return (
        <div className="movie-player text-white my-12 mx-4">
            {linkEmbed ? (
                <iframe
                    src={linkEmbed}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    allowFullScreen
                    title="Movie Player"

                ></iframe>
            ) : (
                <p className="flex justify-center text-2xl text-red-700">Video not available</p>
            )}

            {/* Tập */}
            {hasMultipleEpisodes && (
                <div className="flex flex-wrap gap-4 mt-8 mb-4 mx-auto w-full">
                    {movie.serverData[0].server_data.map((episode, index) => (
                        <button
                            key={index}
                            className={`px-2 py-2 text-sm rounded-lg text-white ${isLoading && currentEpisode === index ? 'bg-red-700' : 'bg-red-500'} hover:bg-red-700`}
                            onClick={() => handleEpisodeClick(index)}
                            disabled={isLoading && currentEpisode === index}
                        >
                            {isLoading && currentEpisode === index ? (
                                <div className="inline-flex items-center">
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Tập {currentEpisode + 1}
                                </div>
                            ) : (
                                episode.name
                            )}
                        </button>
                    ))}
                </div>
            )}
            <div className="flex flex-col lg:flex-row gap-4  max-xl:mx-4">
                <div className="text-white flex-initial w-[850px] max-lg:w-full">
                    <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mb-4">
                        <div className="my-6 mx-4">
                            <strong className="text-lg">
                                {movie.name}
                                {hasMultipleEpisodes && ` (Tập ${currentEpisode + 1})`}
                            </strong>
                            <p className="mt-3">{movie.origin_name}</p>
                        </div>
                    </div>
                    <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                        <div className="my-6 mx-4">
                            <strong className="text-lg">Mô tả</strong>
                            <p className="mt-3">{movie.content}</p>
                        </div>
                    </div>
                    <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mt-4">
                        <div className="my-6 mx-4">
                            <strong className="text-lg">Diễn viên</strong>
                            <p className="mt-3">{movie.actor.join(", ")} </p>
                        </div>
                    </div>
                </div>
                <div className="flex-initial w-[461px] max-lg:w-full border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] text-white">
                    <div className="pt-5 pl-6">
                        {/* Year */}
                        <div className="mb-4">
                            <div className="flex items-center pb-1">
                                <i
                                    className="fa-regular fa-calendar pr-2"
                                    style={{ color: " #999999" }}
                                ></i>
                                <span className="text-[#999999] text-lg">Năm phát hành</span>
                            </div>
                            <p>{movie.year}</p>
                        </div>
                        {/* //lang */}
                        <div className="mb-4">
                            <div className="flex items-center pb-1">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.75 17.5L13.125 8.125L17.5 17.5M10 15H16.25M2.5 4.68447C4.13797 4.48022 5.8067 4.375 7.5 4.375M7.5 4.375C8.43401 4.375 9.36054 4.40701 10.2786 4.47M7.5 4.375V2.5M10.2786 4.47C9.31361 8.88151 6.40723 12.5668 2.5 14.5852M10.2786 4.47C11.0249 4.5212 11.7655 4.59288 12.5 4.68447M8.67606 11.7635C7.32129 10.3849 6.23087 8.74575 5.48694 6.92805"
                                        stroke="#999999"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className="text-[#999999] ml-1 text-lg">Ngôn ngữ</span>
                            </div>
                            <p>{movie.lang}</p>
                        </div>


                        {/* Genre */}
                        <div className="mb-4">
                            <div className="flex items-center pb-1">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z"
                                        stroke="#999999"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z"
                                        stroke="#999999"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z"
                                        stroke="#999999"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z"
                                        stroke="#999999"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <span className="text-[#999999] ml-1 text-lg">Thể loại</span>
                            </div>
                            <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
                        </div>
                        {/* tác giả */}
                        <div className="mb-4">
                            <div className="flex items-center pb-1">
                                <span className="text-[#999999] text-lg">Đạo diễn</span>
                            </div>
                            <p>{movie.director}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Episodes */}

        </div>
    );
};

export default WatchCompoment;
