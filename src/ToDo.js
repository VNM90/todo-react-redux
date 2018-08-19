import React from "react";

const ToDo = ({ task, removeToDo }) => (
  <li>
    {task}
    <button onClick={removeToDo}>REMOVE</button>
  </li>
);

export default ToDo;
