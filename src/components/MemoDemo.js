import React, { useState, useMemo } from "react";
import { findNthPrime } from "../utils/calcPrime";

const MemoDemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }>
      <div>
        <button
          className="bg-green-600 m-2 p-2"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}>
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-blue-500 p-2"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>nth prime is: {prime}</h1>
      </div>
    </div>
  );
};

export default MemoDemo;
