// ToDoContainer Component

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";
import { daysOfTheWeek, months } from "../utility/dates";

function ToDoContainer() {
  let currentDate = new Date();
  let writtenDay = daysOfTheWeek[currentDate.getDay()];
  let writtenMonth = months[currentDate.getMonth()];
  let fullDateFormatted = `${writtenDay}, ${writtenMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  // Lifting state up from ToDoForm to be shared with ToDoList.
  const [tasks, setTasks] = useState([]);

  // Lifting state up function to add a task. Passed down to the ToDoForm component.
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  // Lifting state up function to delete a task. Passed down to the Task component.
  function deleteTask(taskIndex) {
    let newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  }

  return (
    <div className="ToDoContainer">
      <div className="heading-area">
        <h1 className="main-heading">My To-Do List</h1>
        <h2 className="date-subheading">{fullDateFormatted}</h2>
      </div>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} deleteTaskHandler={deleteTask} />
    </div>
  );
}

export default ToDoContainer;
