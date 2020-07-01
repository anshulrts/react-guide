import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solic blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`;

class App extends Component {
  state = {
    persons: [
      {id:'sdaf', name:"Anshul", age:27},
      {id:'qer', name:"Kamal", age:28},
      {id:'xcvz', name:"Varun", age:25}
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

  nameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    
    const person = {...this.state.persons[personIndex]};
    
    //Instead of Object Destructuring, we can use below mentioned approach also
    //const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChanged(event, person.id)}
              />
          })
        }
        </div>
      );

    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello World!</h1>
          <p className={classes.join(' ')}>This really works</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersons}
          >
            Toggle Persons
          </StyledButton>
          {
            persons
          }
        </div>
    );
  }
}

export default App;
