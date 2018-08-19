import React, { Component } from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import { addToDo, removeToDo } from "./actionCreators";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.state = {
      task: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addToDo(this.state.task);
    // event.target.reset();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  removeToDo(id) {
    this.props.removeToDo(id);
  }
  render() {
    let todos = this.props.todos.map((val, index) => (
      <ToDo
        removeToDo={this.removeToDo.bind(this, val.id)}
        task={val.task}
        key={index}
      />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            ADD
          </button>
        </form>

        <ul>{todos}</ul>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(
  mapStateToProps,
  { addToDo, removeToDo }
)(ToDoList);
