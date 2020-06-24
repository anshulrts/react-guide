import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  
  const [personsState, setPersonsState] = useState({
    persons: [
      {name:"Anshul", age:27},
      {name:"Kamal", age:28},
      {name:"Varun", age:25}
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Max", age:29},
        {name: "Nisha", age:44},
        {name: "John", age:13}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: Reading</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;