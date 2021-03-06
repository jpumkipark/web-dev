import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import { Link } from "react-router-dom";
const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a6/hello">Hello</Link> |<Link to="/a6/build">Build</Link>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoList />
    </>
  );
};

export default Practice;
