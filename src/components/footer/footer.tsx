import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto pb-24">
        <div className="grid grid-cols-6 max-md:grid-cols-2 max-lg:grid-cols-3 gap-8 max-xl:mx-4">
          <div>
            <p className="text-2xl font-medium pb-4 text-white">Trang chủ</p>
            <ul className="text-[#999999]">
              <li>Thể loại</li>
              <li>Thiết bị</li>
              <li>Định giá</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium pb-4 text-white">Phim</p>
            <ul className="text-[#999999]">
              <li>Thể loại</li>
              <li>Trending</li>
              <li>Giải trí</li>
              <li>Phổ biến</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium pb-4 text-white">Shows</p>
            <ul className="text-[#999999]">
              <li>Thể loại</li>
              <li>Trending</li>
              <li>Giải trí</li>
              <li>Phổ biến</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium pb-4 text-white">Hỗ trợ</p>
            <ul className="text-[#999999]">
              <Link className="hover:underline" to={"/support"}>Kết nối với tôi</Link>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium pb-4 text-white">Đăng ký</p>
            <ul className="text-[#999999]">
              <li>Plan</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-medium pb-4 text-white">
              Kết nối với chúng tôi qua
            </p>
            <ul className="flex">
              <li className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mr-2">
                <a
                  href="https://www.facebook.com/tolatienviet"
                  className="fa-brands fa-facebook"
                  style={{ color: " #ffffff" }}
                ></a>
              </li>

              <li className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a] mr-2">
                <a
                  href="https://github.com/tienviet04"
                  className="fa-brands fa-github"
                  style={{ color: " #ffffff" }}
                ></a>
              </li>

              <li className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                <i
                  className="fa-brands fa-google"
                  style={{ color: " #ffffff" }}
                ></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-[#262626] border-b-2 mt-20"></div>
        <div className="text-[#999999] max-md:hidden lg:flex justify-between items-center md:mx-4 xl:mx-4">
          <div>
            <p>@2023 TienViet, All Rights Reserved</p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <p>Terms of Use</p>
              <span className="px-2">|</span>
            </div>
            <div className="flex items-center">
              <p>Privacy Policy</p>
              <span className="px-2">|</span>
            </div>
            <div className="flex items-center">
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
        <div className="mx-4 md:hidden">
          <div className="text-[#999999]">
            <div>
              <p>@2023 TienViet, All Rights Reserved</p>
            </div>
          </div>
          <div className="flex items-center text-[#999999]">
            <div className="flex items-center">
              <p>Terms of Use</p>
              <span className="px-2">|</span>
            </div>
            <div className="flex items-center">
              <p>Privacy Policy</p>
              <span className="px-2">|</span>
            </div>
            <div className="flex items-center">
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
