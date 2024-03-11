import React, { useContext, useState } from "react";
import { TodoData } from "../App";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const Heading = () => {
  const { isDark, setIsDark } = useContext(TodoData);
  const toggleFunction = () => {
    setIsDark(!isDark);
  };
  return (
    <div className=" flex justify-between items-center font-bold mb-5">
      <p className="text-4xl tracking-[1.5rem] uppercase text-light-vlg ">
        Todo
      </p>
      <span onClick={toggleFunction}>
        {isDark ? (
          <img src={Moon} className="w-8" />
        ) : (
          <img src={Sun} className="w-8" />
        )}
      </span>
    </div>
  );
};

export default Heading;