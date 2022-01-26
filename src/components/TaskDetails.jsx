import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button.jsx";
import "./TaskDetails.css";

const TaskDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis
          unde molestias a ullam expedita.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
