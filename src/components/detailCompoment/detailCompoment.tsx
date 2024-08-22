import { useLoading } from "../../contexts/loadingContext";
import { IMovies } from "../../types/movies";
import LoadingButton from "../Loading/loading";
import Start from "../Start/start";
import Rating from "../ratings/rating";
import SideBar from "../sideBar/sideBar";
import "./detailCompoment.css";
import { Link } from "react-router-dom";
interface DetailProps {
  movie: IMovies;
}

const DetailComponent: React.FC<DetailProps> = ({ movie }) => {
  const { setLoading } = useLoading()

  const handlePlayClick = () => {
    setLoading(true);
    // Simulate loading time before navigating
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  };
  return (
    <>
      //Banner
      <div className="relative max-xl:mx-4 ">
        <div>
          <img
            className="xl:h-[710px] object-cover xl:w-[1280px] mx-auto rounded-xl lg:w-full lg:h-full "
            src={movie.thumb_url}
            alt="Banner"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="">
            <p className="text-white text-4xl font-bold flex justify-center py-4 max-md:text-2xl">
              {movie.name}
            </p>
            <p className="block max-md:hidden sm:max-w-2xl sm:flex lg:max-w-4xl text-[#d4d4d4] text-lg font-medium xl:max-w-5xl text-center overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.content}
            </p>
          </div>

          <div className="absolute  flex bottom-1/4 max-[380px]:bottom-10 ">

            <button className="px-4 py-2 text-lg text-white max-sm:text-xs bg-red-500 rounded-lg mr-4 hover:bg-red-700">
              <LoadingButton onClick={handlePlayClick}>
                <Link to={"/movies/watch/" + movie.slug}>
                  <i
                    className="fa-solid fa-play fa-xs pr-1"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Play Now
                </Link>
              </LoadingButton>
            </button>

            <div className="border-[#262626] border-2 max-md:hidden rounded-lg p-3 bg-[#1a1a1a] mr-2">
              <i
                className="fa-solid fa-thumbs-up"
                style={{ color: " #ffffff" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      //End Banner
      <div className="flex flex-col lg:flex-row gap-4  max-xl:mx-4">
        <div className="text-white flex-initial w-[850px] max-lg:w-full">
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
            {/* //Rating */}
            <Rating />
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
      <Start />
    </>
  );
};

export default DetailComponent;
