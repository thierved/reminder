import React, { Component } from 'react';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Reminder App</h2>
        <AddTodo />
      </div>
    );
  }
}

export default App;
