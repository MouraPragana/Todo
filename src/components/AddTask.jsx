import { useState } from "react";

import Button from "./Button.jsx";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.trim().length > 0) {
      handleTaskAddition(inputData.trim());
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        style={errorInput ? { border: "1px solid red" } : null}
        placeholder={errorInput ? "Atividade inválida" : null}
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
