import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { IGenre as GenreTypes, IMovies } from "../types/movies";
import { MoviesContext } from "../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import "./category.css";

const Category = () => {
    const [categories, setCategories] = useState<GenreTypes[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const { setMovies, setGenreName } = useContext(MoviesContext);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCategoryClick = async (categoryId: string, categoryName: string) => {
        setGenreName(categoryName);
        localStorage.setItem("selectedCategoryId", categoryId);
        localStorage.setItem("categoryName", categoryName);

        try {
            let currentPage = 1;
            const allMovies: IMovies[] = [];

            while (true) {
                const response = await axios.get(`http://localhost:3000/all?genre=${categoryId}&page=${currentPage}`);
                const data = response.data;

                allMovies.push(...data.data);  // Gộp phim vào mảng allMovies

                if (currentPage >= data.totalPages) {
                    break;  // Nếu đã lấy hết các trang, dừng lại
                }

                currentPage++;  // Chuyển sang trang tiếp theo
            }

            setMovies(allMovies);  // Cập nhật danh sách phim vào MoviesContext
            navigate("/category");
        } catch (error) {
            console.error("Error fetching movies by category:", error);
        }
    };;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3000/genres");
                const genres = response.data.data;
                if (Array.isArray(genres)) {
                    setCategories(genres);
                } else {
                    console.error("Data from API is not an array.");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const savedCategoryId = localStorage.getItem("selectedCategoryId");
        const savedCategoryName = localStorage.getItem("categoryName");

        if (savedCategoryId && savedCategoryName) {
            setGenreName(savedCategoryName);

            const fetchCategoryMovies = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/all?genre=${savedCategoryId}`);
                    setMovies(response.data.data);
                } catch (error) {
                    console.error("Error fetching movies by category:", error);
                }
            };

            fetchCategoryMovies();
        }
    }, [setMovies, setGenreName]);

    const groupedCategories = categories.reduce<GenreTypes[][]>((acc, curr, index) => {
        const groupIndex = Math.floor(index / 5);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curr);
        return acc;
    }, []);

    return (
        <div
            className="category text-red-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Danh mục
            {isHovered && (
                <div className="category-content">
                    <Grid container spacing={2}>
                        {groupedCategories.map((group, colIndex) => (
                            <Grid item xs={12} sm={4} key={colIndex}>
                                {group.map((item) => (
                                    <Box key={item._id} sx={{ padding: "10px" }}>
                                        <p
                                            className="categories-item text-red-700 cursor-pointer"
                                            onClick={() => handleCategoryClick(item._id, item.name)}
                                        >
                                            {item.name}
                                        </p>
                                    </Box>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default Category;
