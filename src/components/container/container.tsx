import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carouseled from "../carousel/silcarousel";

export default function Carousel() {
  return (
    <div className="container mx-auto pt-24 max-w-screen-2xl">
      <div className="flex">
        <div className="max-sm:w-[385px]">
          <p className="text-white font-medium text-[38px] pb-4 max-sm:text-2xl max-xl:mx-4">
            Khám phá nhiều danh mục khác nhau của chúng tôi
          </p>
          <p className="text-[#999999] text-lg max-md:text-sm  max-xl:mx-4">
            Khi bạn đang tìm một bộ phim hài để khiến bạn cười, một bộ phim truyền hình khiến bạn phải suy nghĩ hay một bộ phim tài liệu để học điều gì đó mới mẻ
          </p>
        </div>
        {/* <div className="">
          <div className="text-white bg-[#0F0F0F]">
            <ol className="flex">
              <li className="rounded  size-8  ">
                <a href="" className="h-12 w-12 bg-[#1a1a1a]">
                  <i className="fa-solid fa-arrow-left  "></i>
                </a>
              </li>
              <li className="rounded  size-8  ">
                <a href="" className="h-12 w-12 bg-[#1a1a1a]">
                  <i className="fa-solid fa-arrow-right  "></i>
                </a>
              </li>
            </ol>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-center w-full h-full mt-12 max-sm:py-8 px-4 max-sm:mr-4">
        {/* Carousel for desktop and large size devices */}
        <Carouseled />

        {/* Carousel for tablet and medium size devices */}
        {/* <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>

                  <Slide index={1} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container (1).png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Adventure
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container (2).png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Comedy
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container (3).png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Drama
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container (4).png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Horror
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-lg pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider> */}

        {/* Carousel for mobile and Small size Devices */}
        {/* <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-sm pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-xl pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-xl pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-xl pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-xl pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={5} className="bg-[#1a1a1a] p-3 rounded-lg">
                    <div className=" w-full sm:w-auto">
                      <img
                        src="src/images/Container.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="flex justify-between pb-6">
                        <p className="text-xl pt-2  text-white font-medium">
                          Action
                        </p>
                        <i
                          className="fa-solid fa-arrow-right fa-lg flex pt-6"
                          style={{ color: " #fafafa" }}
                        ></i>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider> */}
      </div>
    </div>
  );
}
