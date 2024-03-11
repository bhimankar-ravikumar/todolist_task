import React, { useContext, useState } from "react";
import { TodoData } from "../App";

const DetachedOther = () => {
  const { isDark, todoList, setTodoList, activeButton, setActiveButton } =
    useContext(TodoData);

  const contents = ["all", "active", "completed"];

  let bg = isDark ? "bg-light-vlgb" : "bg-dark-vdsb";

  const activeColor = (content) =>
    activeButton === content ? "text-brightBlue" : "text-dark-dgb";

  const handleClick = (content) => {
    setActiveButton(content);
    let todoList = JSON.parse(localStorage.getItem("todoList"));

    if (content == "active") {
      const newTodoList = todoList.filter((item) => item.isCompleted === false);
      setTodoList(newTodoList);
    } else if (content == "completed") {
      const newTodoList = todoList.filter((item) => item.isCompleted === true);
      setTodoList(newTodoList);
    } else {
      setTodoList(todoList);
    }
  };
  return (
    <div
      className={` ${bg} flex justify-center absolute top-20 left-0 right-0  ml-0   py-4 rounded-md shadow-2xl md:static md:py-0 md:ml-9 md:justify-between `}
    >
      {contents.map((content) => (
        <button
          role="button"
          key={content}
          tabIndex={1}
          className={`mr-4 cursor-pointer ${activeColor(content)}`}
          onClick={() => handleClick(content)}
        >
          {content[0].toUpperCase() + content.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DetachedOther;