import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const options = API_OPTIONS;
  const url = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    // memoization for upcoming movies
    // if store already have them no api call is made
    upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
