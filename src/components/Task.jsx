/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CgClose, CgInfo } from "react-icons/cg";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          onClick={() => handleTaskDeletion(task.id)}
          className="remove-task-button"
        >
          <CgClose />
        </button>
        <button
          onClick={() => handleTaskDeletion(task.id)}
          className="see-task-details-button"
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
