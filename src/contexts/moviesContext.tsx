import { createContext, ReactNode, useEffect, useState } from "react";
import { IMovies } from "../types/movies";
import PropTypes from "prop-types";
import axios from "axios";

interface MoviesContextProps {
    movies: IMovies[];
    setMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
    genreName: string;
    setGenreName: React.Dispatch<React.SetStateAction<string>>;
}

const MoviesContext = createContext<MoviesContextProps>({
    movies: [],
    setMovies: () => { },
    genreName: "",
    setGenreName: () => { },
});

interface MoviesProviderProps {
    children: ReactNode;
}

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<IMovies[]>([]);
    const [genreName, setGenreName] = useState<string>("");

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const response = await axios.get("https://be-b9uw.onrender.com/all");
                setMovies(response.data.data);
            } catch (error) {
                console.error("Error fetching Movies:", error);
            }
        };
        fetchAllMovies();
    }, []);

    return (
        <MoviesContext.Provider value={{ movies, setMovies, genreName, setGenreName }}>
            {children}
        </MoviesContext.Provider>
    );
};

MoviesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MoviesContext, MoviesProvider };
