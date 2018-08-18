import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const List = props => (
  <div>
    {props.tasksProp.map(task => (
      <Task
        nameProp={task.name}
        deleteTaskProp2={() => props.deleteTaskProp(task.key)}
        toggleTask={props.toggleTask}
        task={task}
        key={task.key}
      />
    ))}
  </div>
);
