import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../search/seach";
import { UserContext } from "../../contexts/userContext";

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const { user, fetchUser, setUser } = React.useContext(UserContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const upperCaseName = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    const header = headerRef.current;
    // const sticky = header?.offsetTop || 0;

    // const handleScroll = () => {
    //   if (window.pageYOffset > sticky && header) {
    //     header.classList.add("sticky");
    //   } else if (header) {
    //     header.classList.remove("sticky");
    //   }
    // };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && !header?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    //window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  console.log(user);

  return (
    <div className="pt-3 sticky top-0 z-50" id="my_header" ref={headerRef}>
      <nav className=" max-w-screen-xl xl:mx-auto lg:mx-8 sm:mx-6 max-sm:mx-4 flex justify-between py-2 items-center">
        <div className="hidden md:flex max-sm:flex lg:hidden items-center">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className="fa-solid fa-bars fa-xl"
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </div>
        <Link to={"/"}>
          <img
            src="../../src/assets/VMovies (3).png"
            className="object-cover xl:w-[200px] xl:h-[60px] max-sm:w-[150px] max-sm:h-[48px] max-md:w-[150px] max-md:h-[48px] max-lg:w-[130px] max-lg:h-[45px] lg:w-[130px] lg:h-[45px]"
            alt="Logo"
          />
        </Link>
        <div className="flex border-2 sm:hidden max-md:hidden  lg:flex xl:flex 2xl:flex border-[#262626] rounded-xl shadows bg-[#000000]">
          <ul className="text-white flex items-center xl:my-2 lg:my-1 ">
            <Link
              to={"/"}
              className={` text-white hover:bg-[#343434] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer xl:ml-2 xl:p-2 lg:ml-1 lg:p-2  font-normalleading-3 shadow-md rounded-lg ${location.pathname === "/" && "text-white bg-[#282727]"
                }`}
            >
              Home
            </Link>
            <Link
              to={"/movies"}
              className={` text-white hover:bg-[#343434] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer xl:ml-2 xl:p-2 lg:ml-1 lg:p-2  font-normalleading-3 shadow-md rounded-lg ${location.pathname === "/movies" && "text-white bg-[#282727]"
                }`}
            >
              Movies
            </Link>
            <Link
              to={"/support"}
              className={` text-white hover:bg-[#343434] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer xl:ml-2 xl:p-2 lg:ml-1 lg:p-2  font-normalleading-3 shadow-md rounded-lg ${location.pathname === "/support" && "text-white bg-[#282727]"
                }`}
            >
              Support
            </Link>
            <Link
              to={"/subcription"}
              className={` text-white hover:bg-[#343434] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer xl:ml-2 xl:p-2 lg:ml-1 lg:p-2  xl:mr-3 lg:mr-1 font-normalleading-3 shadow-md rounded-lg ${location.pathname === "/sub" && "text-white bg-[#282727]"
                }`}
            >
              Subscriptions
            </Link>
          </ul>
        </div>

        <div className="flex items-center max-sm:hidden sm:hidden lg:flex xl:flex 2xl:flex mr-[-100px] ml-[-100px] ">
          <Search />
        </div>
        <div className="relative flex items-center lg:hidden mx-2 ">
          <div
            className={`${searchVisible ? "w-48" : "w-0"
              } transition-all duration-500 overflow-hidden`}
          >
            <Search />
          </div>
          <button
            className="text-white"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5a7 7 0 00-7 7 7 7 0 1014 0 7 7 0 00-7-7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>
          </button>
        </div>
        {user ? (
          <div className="flex gap-3 max-sm:hidden sm:hidden lg:flex">
            <div className="ml-2">
              <i className="fa-solid fa-user" style={{ color: " #ffffff" }}></i>
            </div>
            <div className="flex items-center">
              <div className="  text-lg font-medium text-white">
                Xin chào {upperCaseName(user.username)}
              </div>
              <button onClick={() => { localStorage.removeItem("user"); localStorage.removeItem("token"); window.location.reload() }} >
                <i className="fa-solid fa-right-from-bracket ml-4" style={{ color: " #ffffff" }}></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center max-sm:hidden sm:hidden lg:flex">
            <div className="lg:flex lg:gap-2 xl:gap-4" >
              <Link
                to={"/login"}
                className="rounded-md bg-[#262626] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#1d1d1d]"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  to={"/register"}
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-white border-2 border-[#262626] hover:bg-[#262626]"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav >

      {/* Overlay */}
      {
        menuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
        )
      }

      {/* Mobile Navigation */}
      <div
        id="MobileNavigation"
        className={`fixed top-0 w-[240px] md:w-[340px] left-0 h-full bg-black text-white z-50 transition-all duration-400 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col py-4 shadows bg-[#000000]">
          <ul className="flex flex-col items-start space-y-2 p-4">
            <div className="flex items-center md:text-xl border-b-2 w-full mb-2 border-[#c5c0c0]">
              <div className="ml-2">
                <i className="fa-solid fa-user" style={{ color: " #ffffff" }}></i>
              </div>
              {user ? (
                <div className="flex items-center">
                  <div className="w-full p-2 rounded-lg text-lg font-bold">
                    Xin chào {upperCaseName(user.username)}
                  </div>
                  <button onClick={() => { localStorage.removeItem("user"); localStorage.removeItem("token"); window.location.reload() }} >
                    <i className="fa-solid fa-right-from-bracket ml-4" style={{ color: " #ffffff" }}></i>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="w-full p-2 rounded-lg text-lg font-bold hover:text-red-500"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              )}
            </div>

            <Link
              to="/"
              className="w-full p-2 md:text-xl rounded-lg text-xs hover:text-red-500"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="w-full p-2 md:text-xl rounded-lg text-xs hover:text-red-500"
              onClick={closeMenu}
            >
              Movies & Shows
            </Link>
            <Link
              to="/support"
              className="w-full p-2 md:text-xl rounded-lg text-xs hover:text-red-500"
              onClick={closeMenu}
            >
              Support
            </Link>
            <Link
              to="/subscriptions"
              className="w-full p-2 md:text-xl rounded-lg text-xs hover:text-red-500"
              onClick={closeMenu}
            >
              Subscriptions
            </Link>
          </ul>
        </div>
      </div>
    </div >
  );
};
