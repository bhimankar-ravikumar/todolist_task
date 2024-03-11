import React, { useContext, useState, useRef } from "react";
import { TodoData } from "../App";
import Todo from "./Todo";

const Todos = () => {
  const { todoList: list } = useContext(TodoData);

  const dragStartIndex = useRef();
  const dragEndIndex = useRef();

  return (
    <section>
      <ul className="rounded-tl-lg rounded-tr-lg  shadow-xl max-h-[408px] overflow-hidden hover:overflow-y-auto">
        {list.map((each, index) => (
          <Todo
            key={each.id}
            {...each}
            listIndex={index}
            dragStartIndex={dragStartIndex}
            dragEndIndex={dragEndIndex}
          />
        ))}
      </ul>
    </section>
  );
};

export default Todos;