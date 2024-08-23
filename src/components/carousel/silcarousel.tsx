import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import axios from 'axios';
import { IGenre as GenreTypes, IMovies } from '../../types/movies';
import { MoviesContext } from '../../contexts/moviesContext';
import { useNavigate } from 'react-router-dom';

const Carouseled: React.FC = () => {
  const [genres, setGenres] = useState<GenreTypes[]>([]);
  const { setMovies, setGenreName } = useContext(MoviesContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://be-b9uw.onrender.com/genres');
        setGenres(response.data.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreClick = async (genreId: string, genreName: string) => {
    setGenreName(genreName);
    localStorage.setItem('selectedCategoryId', genreId);
    localStorage.setItem('categoryName', genreName);

    try {
      let currentPage = 1;
      const allMovies: IMovies[] = [];

      while (true) {
        const response = await axios.get(`http://localhost:3000/all?genre=${genreId}&page=${currentPage}`);
        const data = response.data;

        allMovies.push(...data.data);  // Gộp phim vào mảng allMovies

        if (currentPage >= data.totalPages) {
          break;  // Nếu đã lấy hết các trang, dừng lại
        }

        currentPage++;  // Chuyển sang trang tiếp theo
      }

      setMovies(allMovies);  // Cập nhật danh sách phim vào MoviesContext
      navigate('/category');
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  return (
    <div className="w-full relative">
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
            slidesPerView: 2, // Hiển thị 2 item trên màn hình nhỏ hơn hoặc bằng 640px
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2, // Hiển thị 2 item trên màn hình sm (640px)
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4, // Hiển thị 3 item trên màn hình md (768px)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // Hiển thị 5 item trên màn hình lg trở lên (1024px)
            spaceBetween: 30,
          },
        }}
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre._id}>
            <div
              className="bg-[#262626] rounded-2xl  h-auto flex flex-col justify-between items-center cursor-pointer p-4"
              onClick={() => handleGenreClick(genre._id, genre.name)}
            >
              <div className="h-[250px] max-sm:h-[200px] w-full overflow-hidden rounded-lg">
                <img
                  src={genre.description}
                  alt={genre.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <span className="text-xl  font-semibold text-white max-sm:text-lg ">
                  {genre.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Carouseled;
