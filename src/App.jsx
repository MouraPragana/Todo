import { useState } from "react";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";

import "./App.css";

const App = () => {
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="container">
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
