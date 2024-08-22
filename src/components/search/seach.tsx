import "./search.css";
import { Box, Stack, Typography } from "@mui/material";
import search from "../../assets/icons/Search.svg";
import loadingSearch from "../../assets/icons/loadingSearch.svg";
import clear from "../../assets/icons/clear.svg";
import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { IMovies } from "../../types/movies";
import { searchMovies } from "../../api/movies";

const Search = () => {
  const [searchResult, setSearchResult] = useState<IMovies[]>([]);
  const [valueInput, setValueInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showTippy, setShowTippy] = useState<boolean>(false);
  const [inputActive, setInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchVisible, setSearchVisible] = useState(true);

  const handleHideResult = () => {
    setShowTippy(false);
  };

  const clearIcon = () => {
    setValueInput("");
    setShowTippy(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (!valueInput.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const result = await searchMovies(valueInput);
        setSearchResult(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (valueInput.trim() !== "") {
      fetchProduct();
    } else {
      setSearchResult([]);
    }
  }, [valueInput]);



  return (
    <Tippy
      visible={
        showTippy && (searchResult.length > 0 || valueInput.trim() !== "")
      }
      onClickOutside={handleHideResult}
      interactive
      render={(attrs) => (
        <div tabIndex={-1} {...attrs} className="wrapper">
          <hr style={{ opacity: "0.3" }} />
          {searchResult.length > 0 ? (
            searchResult.map((item) => (
              <div className="result-item mb-8" key={item._id}>
                <Link to={`/movies/${item.slug}`} className="link-result">
                  <img src={item.poster_url} alt="" className="img-result" />
                  <div className="result-text">
                    <span className="movie-name flex justify-start">
                      {item.name}
                    </span>
                    <span className="movie-genres flex justify-start">
                      {item.origin_name}
                    </span>
                  </div>
                </Link>
                <hr style={{ opacity: "0.3" }} />
              </div>
            ))
          ) : (
            <Typography variant="body2" align="center" sx={{ color: "white" }}>
              Không tìm thấy tên phim
            </Typography>
          )}
        </div>
      )}
    >
      <Box sx={{ marginRight: "20px" }}>
        <form action="" className="search-form">
          <div className="search-group max-sm:text-[12px] ">
            <input
              type="text"
              ref={inputRef}
              placeholder="Search movies"
              className={`input-search xl:!w-full lg:!w-[140px] ${searchVisible ? "active" : ""} mr-1`}
              value={valueInput}
              onFocus={() => {
                setShowTippy(true);
                setInputActive(true);
              }}
              onBlur={() => !valueInput && setInputActive(false)}
              onChange={(e) => setValueInput(e.target.value)}
            />
            {loading && (
              <img src={loadingSearch} alt="" className="icon icon-load" />
            )}
            {valueInput && !loading && (
              <img
                src={clear}
                alt=""
                className="icon icon-clear"
                onClick={clearIcon}
              />
            )}
            <button
              type="button"
              className="icon-search max-sm:hidden"

            >
              <img src={search} alt="" />
            </button>
          </div>
        </form>
      </Box>
    </Tippy>
  );
};

export default Search;
