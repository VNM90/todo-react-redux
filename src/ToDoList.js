import React, { Component } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";

class ToDoList extends Component {
  constructor(props) {
    super(props);
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

export default connect()(ToDoList);
