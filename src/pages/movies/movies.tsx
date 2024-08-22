import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import Slides from "../../components/carousel/silcarousel";
import Carouseled from "../../components/carousel/silcarousel";
import Banner from "../../components/banner/banner";
import BodyMovies from "../../components/bodyMovies/bodyMovies";
import { IGenre } from "../../types/movies";
import { useLoaderData } from "react-router-dom";
import Example from "../../components/slide/slide";

export default function Movies() {
  return (
    <div className="bg-black">
     
      <Example />
      <div className="max-w-screen-xl mx-auto pt-8">
        <BodyMovies />
      </div>
      
    </div>
  );
}
