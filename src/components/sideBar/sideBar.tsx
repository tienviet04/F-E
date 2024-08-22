import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <div className="absolute lg:relative w-64  shadow bg-gray-100 hidden lg:block">
            <div className="flex h-screen max-w-[294px] flex-col justify-between   ">
              <div className="px-4 py-6">
                <div className="w-56 mx-auto">
                  <span className="grid text-3xl  pb-2">Trending</span>
                  <div className="border-2 border-dashed border-white"></div>
                </div>

                <div className=" font-medium my-4 ">
                  <button className="py-2 px-4 bg-[#5d5d5d]">Ngày</button>
                  <button className="py-2 px-4 ">Tuần</button>
                  <button className="py-2 px-4 ">Tháng</button>
                </div>
                <ul>
                  <li className="flex">
                    <div className="mr-2">
                      <img
                        src="https://banghieuminhkhang.com/upload/sanpham/poster/poster-phim-10.jpg"
                        alt=""
                        className="block w-[88px] h-[128px]  object-fill"
                      />
                    </div>

                    <div className="block w-[180px]">
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tôi là vợ của anh
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tác giả
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">
                      <img
                        src="https://banghieuminhkhang.com/upload/sanpham/poster/poster-phim-10.jpg"
                        alt=""
                        className="block w-[88px] h-[128px]  object-fill"
                      />
                    </div>

                    <div className="block w-[180px]">
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tôi là vợ của anh
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tác giả
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">
                      <img
                        src="https://banghieuminhkhang.com/upload/sanpham/poster/poster-phim-10.jpg"
                        alt=""
                        className="block w-[88px] h-[128px]  object-fill"
                      />
                    </div>

                    <div className="block w-[180px]">
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tôi là vợ của anh
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tác giả
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">
                      <img
                        src="https://banghieuminhkhang.com/upload/sanpham/poster/poster-phim-10.jpg"
                        alt=""
                        className="block w-[88px] h-[128px]  object-fill"
                      />
                    </div>

                    <div className="block w-[180px]">
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tôi là vợ của anh
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tác giả
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">
                      <img
                        src="https://banghieuminhkhang.com/upload/sanpham/poster/poster-phim-10.jpg"
                        alt=""
                        className="block w-[88px] h-[128px]  object-fill"
                      />
                    </div>

                    <div className="block w-[180px]">
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tôi là vợ của anh
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  px-4 py-2 text-sm font-medium  break-words"
                      >
                        Tác giả
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto py-10 md:w-4/5 w-11/12 px-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
