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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:29},
        {name: "Nisha", age:44},
        {name: "John", age:13}
      ]
    })
  }

  nameChanged = (event) => {
    this.setState({
      persons: [
        {name: "Anshul", age:27},
        {name: event.target.value, age:28},
        {name: "Varun", age:25}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solic black',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilan')}>
            Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickPara={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChanged}
        >
          My hobbies: Reading
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
