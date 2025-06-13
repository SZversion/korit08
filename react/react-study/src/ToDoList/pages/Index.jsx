import React, { useEffect, useState } from "react";
import IndexLayout from "../components/IndexLayout/IndexLayout";
import IndexMain from "../components/IndexMain/IndexMain";

function Index({ props }) {
  const [isLoad, setIsLoad] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let localStoageTodoList = localStorage.getItem("todoList");
    if (!localStoageTodoList) {
      localStorage.setItem("todoList", JSON.stringify([]));
      localStoageTodoList = [];
      setTodoList(localStoageTodoList);
    } else {
      setTodoList(JSON.parse(localStoageTodoList));
    }
    setIsLoad(true);
  }, []);

  useEffect(() => {
    setSearchText("");
    if (isLoad) {
      let localStoageTodoList = localStorage.getItem("todoList");
      const todoListJson = JSON.stringify(todoList);
      if (localStoageTodoList !== todoListJson) {
        localStorage.setItem("todoList", todoListJson);
      }
    }
  }, [isLoad, todoList]);

  const filterTodoList = todoList
    .filter((todo) => {
      if (filter === "all") {
        return true;  //filter는 map과 비슷하게 작동하며 return 값이 boolean을 받고 그 값이 true이면 그 요소를 포함하고 false이면 배제한 배열을 반환한다
      } else if (filter === "complete") {
        return todo.isComplete;
      } else if (filter === "incomplete") {
        return !todo.isComplete;
      }
    })
    .filter((todo) => {
      if (searchText.trim().length === 0) {
        return true;
      }
      return todo.content.includes(searchText);
    });
    

  return (
    <IndexLayout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      <IndexMain todoList={filterTodoList} setTodoList={setTodoList}></IndexMain>
    </IndexLayout>
  );
}

export default Index;
