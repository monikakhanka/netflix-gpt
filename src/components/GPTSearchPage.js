import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
