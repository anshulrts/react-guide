import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:"Anshul", age:27},
      {name:"Kamal", age:28},
      {name:"Varun", age:25}
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Max", age:29},
        {name: "Nisha", age:44},
        {name: "John", age:13}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
