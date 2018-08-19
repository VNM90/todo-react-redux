import React, { Component } from "react";
import ToDoList from "./ToDoList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MY TODO APP</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
