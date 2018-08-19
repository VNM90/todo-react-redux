import React, { Component } from "react";
import ToDo from "./ToDo";
export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["eat"]
    };
  }
  render() {
    let todos = this.state.todos.map((task, index) => (
      <ToDo task={task} key={index} />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}
