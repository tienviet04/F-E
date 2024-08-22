import { Link, useNavigate } from "react-router-dom";
import { IMovies } from "../../types/movies";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './new.css';
import { Swiper, SwiperSlide } from 'swiper/react';
interface TrendingPops {
    movies: IMovies[];
}
const New: React.FC<TrendingPops> = ({ movies }) => {
    const navi = useNavigate()
    return (
        <>
            <div className="grid grid-cols-5 gap-3 mx-4 pt-8 max-xl:hidden">
                {movies.map((items, index) => (
                    <Link
                        key={items._id}
                        to={"/movies/" + items.slug}
                        className="group relative block h-64 w-full sm:h-80 lg:h-96"
                    >
                        <span className="absolute inset-0 border-2 border-dashed"></span>

                        <div className="relative flex h-full transform items-end border-2 border-black bg-[#1a1a1a] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                            <div className="w-full p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6">
                                <div>
                                    <div>
                                        <img
                                            src={items.poster_url}
                                            alt="black chair and white table"
                                            className="w-[196px] h-[224px]"
                                        />
                                    </div>

                                    <div className="w-[180px] overflow-hidden">
                                        <h2 className="truncate mt-4 text-xl text-white font-medium sm:text-[15px]">
                                            {items.name}
                                        </h2>
                                    </div>
                                    <div className="flex justify-between mt-4 ">
                                        <div className="rounded-3xl border-[#262626] border-2 flex items-center bg-[#141414]">
                                            <i
                                                className="fa-regular fa-clock pl-2"
                                                style={{ color: " #ffffff" }}
                                            ></i>
                                            <p className="text-sm p-2 text-white font-medium">
                                                {items.time}
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
                                    {items.name}
                                </h3>

                                <p className="mt-2 text-sm sm:text-base text-white">
                                    Thể loại:{" "}
                                    {items.genres.map((genre) => genre.name).join(" , ")}
                                </p>
                                <p className="mt-2 text-sm sm:text-base text-white">
                                    {items.time}
                                </p>
                                <p className="mt-2 text-sm sm:text-base text-white">
                                    {items.lang}
                                </p>
                                <p className="mt-2 text-sm sm:text-base text-white">
                                    {items.year}
                                </p>
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
                ))}
            </div>
            {/* Mobiles */}
            <div className="w-full mt-6 relative xl:hidden">

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={5}
                    modules={[Pagination]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {movies.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-[#262626] rounded-2xl h-auto flex flex-col justify-between items-center cursor-pointer p-4"
                                onClick={() => navi("/movies/" + item.slug)}
                            >
                                <div className="h-[250px] max-sm:h-[200px] w-full overflow-hidden rounded-lg">
                                    <img
                                        src={item.poster_url}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="rounded-3xl border-[#262626] border-2 flex items-center bg-[#141414]">
                                        <i className="fa-regular fa-clock pl-2" style={{ color: " #ffffff" }}></i>
                                        <p className="text-[10px] max-sm:text-[8px] p-2 text-white font-medium">{item.time}</p>
                                    </div>
                                    <div className="rounded-3xl border-[#262626] border-2 flex items-center bg-[#141414]">
                                        <i className="fa-solid fa-eye flex items-center pl-2" style={{ color: " #ffffff" }}></i>
                                        <p className="text-[10px] max-sm:text-[8px] p-2 text-white font-medium">20k</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    );
};
export default New;
