import { createContext, useEffect, useState } from "react";
import Card from "./Components/Card";
import "./App.css";

export const TodoData = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeButton, setActiveButton] = useState("all");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let localList = localStorage.getItem("todoList");
    let todoList = localList ? JSON.parse(localList) : [];
    setTodoList(todoList);
  }, []);

  let modes_Settings = {
    darkMode: `bg-mobile-darkBG bg-dark-vdb md:bg-desktop-darkBG dark`,
    lightMode: `bg-mobile-lightBG bg-light-vlgb md:bg-desktop-lightBG`,
  };

  let appSetting = isDark ? modes_Settings.lightMode : modes_Settings.darkMode;
  return (
    <div
      className={`min-h-screen w-full bg-no-repeat  bg-[length:100%_30%]  pt-1 ${appSetting}`}
    >
      <TodoData.Provider
        value={{
          isDark,
          setIsDark,
          todoList,
          setTodoList,
          activeButton,
          setActiveButton,
        }}
      >
        <Card />
      </TodoData.Provider>
    </div>
  );
}

export default App;