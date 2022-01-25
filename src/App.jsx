import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
};

export default App;
