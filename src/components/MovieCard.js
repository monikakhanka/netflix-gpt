import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-52 px-2">
      <img
        className="object-contain"
        src={IMG_CDN_URL + posterPath}
        alt="movieCard"
      />
    </div>
  );
};

export default MovieCard;
