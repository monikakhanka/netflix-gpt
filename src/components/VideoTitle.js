import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-base  w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-lg py-1 mr-2 px-16 hover:opacity-60">
          Play
        </button>
        <button className="bg-gray-600 text-lg text-white rounded-lg py-1 px-12 hover:opacity-60">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
