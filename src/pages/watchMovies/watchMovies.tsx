import { useLoaderData } from "react-router-dom";
import { Header } from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { IMovies } from "../../types/movies";
import WatchCompoment from "../../components/watchMovies/watchCompoment";

export default function WatchMovie() {
    const movie = useLoaderData() as IMovies;

    return (
        <div className="bg-black">
           

            <div className="max-w-screen-xl mx-auto ">
                {movie ? <WatchCompoment movie={movie} /> : <p>Loading...</p>}
            </div>
           
        </div>
    );
}
