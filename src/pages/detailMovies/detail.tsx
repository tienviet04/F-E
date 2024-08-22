import { useLoaderData } from "react-router-dom";
import { Header } from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DetailComponent from "../../components/detailCompoment/detailCompoment";
import { IMovies } from "../../types/movies";

export default function Detail() {
  const movie = useLoaderData() as IMovies;
  console.log(movie);

  return (
    <div className="bg-black">


      <div className="max-w-screen-xl mx-auto ">
        {movie ? <DetailComponent movie={movie} /> : <p>Loading...</p>}
      </div>

    </div>
  );
}
