import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "../Practice/ReduxEamples/components/index";
import { Link } from "react-router-dom";
import APIExamples from "./APIExamples";
const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a8/twitter/home">Build</Link>
      <APIExamples/>
      <ReduxExamples />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoList />
    </>
  );
};

export default Practice;
