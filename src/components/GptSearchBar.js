import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-3 m-3 col-span-9 rounded-sm"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="p-3 m-3 col-span-3 bg-red-700 text-white rounded-sm">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
