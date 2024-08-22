import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Start from "../../components/Start/start";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { IMovies } from "../../types/movies";
import Single from "../../components/single/single";
import { getMoviesNewPaginated } from "../../api/movies";
import ReactPaginate from "react-paginate";
import "./GenreNew.css";
import Carouseled from "../../components/carousel/silcarousel";

export default function GenreNew() {
    const data = useLoaderData() as {
        movies: IMovies[];
        totalPages: number;
        currentPage: number;
    };
    const { movies, totalPages, currentPage } = data;

    const [page, setPage] = useState(currentPage);
    const [moviesList, setMoviesList] = useState(movies);

    const handlePageChange = async (selectedItem: { selected: number }) => {
        const newPage = selectedItem.selected + 1;
        const { data, totalPages, currentPage } = await getMoviesNewPaginated(
            newPage,
            10
        );
        setMoviesList(data);
        setPage(currentPage);
    };

    return (
        <div className="bg-black  mx-4">
            <div className="pb-24 ">
                <p className="text-white text-4xl font-bold mb-6">Thể loại</p>
                <Carouseled />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="pb-24">
                    <div className="flex justify-between items-center">
                        <p className="text-white text-4xl font-bold">Phim mới</p>
                    </div>
                    <div className="grid grid-cols-3 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-12 ">
                        {moviesList.map((movie: IMovies) => (
                            <Single key={movie._id} movie={movie} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <ReactPaginate
                            pageCount={totalPages}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                            previousLabel={"Pre"}
                            nextLabel={"Next"}
                            breakLabel={"....."}
                            breakClassName={"break-me"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                        />

                    </div>
                </div>
                <Start />
            </div>
        </div>
    );
}
