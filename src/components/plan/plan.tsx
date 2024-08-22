export default function Plan() {
  return (
    <>
      <div className="pt-12 max-xl:mx-4">
        <div className="flex">
          <div className="max-w-[1010px]">
            <p className="text-white text-[38px] max-sm:text-2xl">
              Vui lòng chọn gói phù hợp nhất
            </p>
            <p className="text-[#999999] text-lg max-md:text-sm ">
              Tham gia VMovies và chọn từ các gói tuỳ chọn đăng ký của chúng tôi. Chúng tôi luôn sẵn
              sàng phục vụ các bạn
            </p>
          </div>
          <div className="max-sm:hidden flex items-center ml-auto">
            <div className="border-[#262626] border-2 rounded-lg">
              <div className="flex p-2">
                <div className="border-[#262626] border-2 rounded-lg  px-4 py-2 bg-[#262626]">
                  <p className="text-white">Tháng</p>
                </div>
                <div className="px-4 py-2 ">
                  <p className="text-white">Năm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden  flex items-center  mt-4">
          <div className="border-[#262626] border-2 rounded-lg">
            <div className="flex p-1">
              <div className="border-[#262626] border-2 rounded-lg  px-2 py-1 bg-[#262626]">
                <p className="text-white">Tháng</p>
              </div>
              <div className="px-2 py-1 ">
                <p className="text-white">Năm</p>
              </div>
            </div>
          </div>
        </div>
        {/* item */}
        <div className="pt-12">
          <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:mx-4">
            <div className="bg-[#262626] border-[#262626] border-2 rounded-lg p-6">
              <div>
                <p className="text-white text-2xl">Gói tiêu chuẩn</p>
                <p className="text-[#999999] text-sm pt-4">
                  Truy cập vào nhiều lựa chọn phim và chương trình hơn, bao gồm
                  hầu hết các bản phát hành mới và nội dung độc quyền
                </p>
              </div>
              <div className="flex items-end py-4">
                <p className="text-white text-2xl">120.000&#8363;
                </p>
                <p className="text-[#999999]">/tháng</p>
              </div>
              <div className="hidden lg:flex">
                <a
                  className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-10 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                  href="#"
                >
                  Dùng thử
                </a>
                <a
                  className=" inline-block rounded border border-red-600 bg-red-600 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                  href="#"
                >
                  Chọn gói
                </a>
              </div>
              <div className="flex lg:hidden">
                <div>
                  <a
                    className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-5 py-1 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                    href="#"
                  >
                    Dùng thử
                  </a>
                </div>
                <div>
                  <a
                    className=" inline-block rounded border border-red-600 bg-red-600 px-5 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                    href="#"
                  >
                    Chọn gói
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#262626] border-[#262626] border-2 rounded-lg p-6">
              <div>
                <p className="text-white text-2xl">Gói Vip</p>
                <p className="text-[#999999] text-sm pt-4">
                  Truy cập vào nhiều lựa chọn phim và chương trình nhất, bao gồm
                  tất cả các bản phát hành mới và Xem ngoại tuyến
                </p>
              </div>
              <div className="flex items-end py-4">
                <p className="text-white text-2xl">320.000&#8363;</p>
                <p className="text-[#999999]">/tháng</p>
              </div>
              <div className="hidden lg:flex">
                <a
                  className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-10 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                  href="#"
                >
                  Dùng thử
                </a>
                <a
                  className=" inline-block rounded border border-red-600 bg-red-600 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                  href="#"
                >
                  Chọn gói
                </a>
              </div>
              <div className="flex lg:hidden">
                <div>
                  <a
                    className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-5 py-1 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                    href="#"
                  >
                    Dùng thử
                  </a>
                </div>
                <div>
                  <a
                    className=" inline-block rounded border border-red-600 bg-red-600 px-5 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                    href="#"
                  >
                    Chọn gói
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#262626] border-[#262626] border-2 rounded-lg p-6">
              <div>
                <p className="text-white text-2xl">Gói cơ bản</p>
                <p className="text-[#999999] text-sm pt-4">
                  Thưởng thức thư viện phim và chương trình phong phú, bao gồm
                  phạm vi nội dung, bao gồm cả các tựa sách được phát hành gần đây.
                </p>
              </div>
              <div className="flex items-end py-4">
                <p className="text-white text-2xl">99.000&#8363;</p>
                <p className="text-[#999999]">/tháng</p>
              </div>
              <div className="hidden lg:flex">
                <a
                  className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-10 py-2 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                  href="#"
                >
                  Dùng thử
                </a>
                <a
                  className=" inline-block rounded border border-red-600 bg-red-600 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                  href="#"
                >
                  Chọn gói
                </a>
              </div>
              <div className="flex lg:hidden">
                <div>
                  <a
                    className="mr-2 inline-block rounded border border-[#999999] bg-[#1a1a1a] px-5 py-1 text-sm font-medium text-white hover:bg-red-600 hover:text-white"
                    href="#"
                  >
                    Dùng thử
                  </a>
                </div>
                <div>
                  <a
                    className=" inline-block rounded border border-red-600 bg-red-600 px-5 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
                    href="#"
                  >
                    Chọn gói
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
