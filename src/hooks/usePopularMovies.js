import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const options = API_OPTIONS;

  const popularMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const url = "https://api.themoviedb.org/3/movie/popular";

  const getPopularMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
