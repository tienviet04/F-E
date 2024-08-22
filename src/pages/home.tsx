import { Header } from "../components/header/header";
import Carousel from "../components/container/container";
import { Text_header } from "../components/text_header";

import React from "react";
import ContainerMenu from "../components/ContainerMenu/containerMenu";
import Question from "../components/questionBody/questionBody";
import Plan from "../components/plan/plan";
import Start from "../components/Start/start";
import Footer from "../components/footer/footer";
import { ToastContainer } from "react-toastify";
export const Home: React.FC = () => {
  return (
    <div className="bg-[#000000] relative z-50">
      <ToastContainer />
      <Header />
      <div className="bg">
        <img src="src/images/SubContainer.png" alt="" />
        <div className="max-w-screen-xl mx-auto pt-8 ">
          <Text_header />
          <Carousel />
          <ContainerMenu />
          <Question />
          <Plan />
          <Start />
        </div>
      </div>
      <Footer />
    </div>
  );
};
