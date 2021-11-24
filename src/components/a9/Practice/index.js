import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "../Practice/ReduxEamples/components/index";
import { Link } from "react-router-dom";
import APIExamples from "./APIExamples";
import Movies from "./Movies"
const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <div>
        <Link to="/a6/twitter">Assignment6 </Link>
        <Link to="/a7/twitter/home">Assignment7</Link>
        <Link to="/a8/twitter/home">Assignment 8</Link>
      </div>
      <Link to="/a9/twitter/home">Assignment 9</Link>
      <Movies/>
      <APIExamples />
      <ReduxExamples />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoList />
    </>
  );
};

export default Practice;
