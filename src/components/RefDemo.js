import React from "react";

const RefDemo = () => {
  let x = 10;

  return (
    <div className="m-4 p-4 h-96 w-96 bg-slate-50 border border-black">
      <button
        className="bg-red-300 w-auto p-4"
        onClick={() => {
          x = x + 1;
          console.log(x);
        }}>
        Click me
      </button>
      <div>let = {x}</div>
    </div>
  );
};

export default RefDemo;
