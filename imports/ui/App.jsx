import React, { Component } from 'react';
import Task from './Task.jsx';
import Navbar from './Navbar.jsx'; 
import Inputform from './Inputform.jsx'; 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    

    var mainStyle = {
      marginTop: "-35vh",
    };
    return (
      <div>
        <Navbar/>
        <div className="robbonStyle"></div>
        <div style={mainStyle}>
          <Inputform />
        </div>
      </div>
    );
  }
}