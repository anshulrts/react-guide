import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:"Anshul", age:27},
      {name:"Kamal", age:28},
      {name:"Varun", age:25}
    ],
    showPersons: false
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

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solic black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {
          this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}
              />
          })
        }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button
          style={style}
          onClick={this.togglePersons}
        >
            Toggle Persons
        </button>
        {
          persons
        }
      </div>
    );
  }
}

export default App;
