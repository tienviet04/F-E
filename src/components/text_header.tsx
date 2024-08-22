import { Link } from "react-router-dom";

export function Text_header() {
  return (
    <div className="flex flex-col items-center max-w-screen-xl max-sm:max-w-[380px] mx-auto">
      <strong className="text-[42px] text-white pb-6 max-sm:text-2xl">
        Thế giới giải trí trong tầm tay
      </strong>
      <div className="pb-8">
        <p className="max-md:text-sm text-lg text-white text-center max-sm:text-[12px] mx-2">
          VMovies là trải nghiệm phát trực tuyến tốt nhất để xem video yêu thích của bạn
          phim và chương trình theo yêu cầu, mọi lúc, mọi nơi. Với VMovies, bạn
          có thể thưởng thức nhiều nội dung khác nhau, bao gồm cả nội dung mới nhất
          phim bom tấn, phim kinh điển, chương trình truyền hình nổi tiếng, v.v. Bạn cũng có thể
          tạo danh sách theo dõi của riêng bạn để bạn có thể dễ dàng tìm thấy nội dung bạn
          muốn xem
        </p>
      </div>
      <div className=" bg-[#E50000] rounded-lg">
        <button className="p-2  text-lg text-white max-sm:text-xs ">
          <Link to={"/movies"}>
            <i
              className="fa-solid fa-play fa-xs pr-1"
              style={{ color: "#ffffff" }}
            ></i>
            Start Watching Now
          </Link>
        </button>
      </div>
    </div>
  );
}
