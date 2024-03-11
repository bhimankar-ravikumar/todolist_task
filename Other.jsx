import React, { useContext } from "react";
import { TodoData } from "../App";
import DetachedOther from "./DetachedOther";

const Other = () => {
  const { isDark, todoList, setTodoList, setActiveButton } =
    useContext(TodoData);
  const divStyle = isDark ? "bg-light-vlgb" : "bg-dark-vdsb";

  return (
    <div
      className={`flex justify-between text-dark-dgb py-4 px-7 relative rounded-b-md  shadow-xl ${divStyle}`}
    >
      <p className="cursor-default" tabIndex={1}>
        {todoList.length <= 1
          ? `${todoList.length} item`
          : `${todoList.length} items`}{" "}
        left
      </p>

      <DetachedOther />

      <button className="cursor-pointer" tabIndex={1} onClick={handleClear}>
        Clear Completed
      </button>
    </div>
  );

  function handleClear() {
    let localList = JSON.parse(localStorage.getItem("todoList"));

    const newTodoList = localList.filter((item) => item.isCompleted === false);

    localStorage.setItem("todoList", JSON.stringify(newTodoList));

    setTodoList(newTodoList);

    setActiveButton("all");
  }
};

export default Other;