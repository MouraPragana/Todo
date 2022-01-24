// eslint-disable-next-line no-unused-vars
import React from "react";
import Task from "./Task.jsx";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task} />
      ))}
    </>
  );
};

export default Tasks;
