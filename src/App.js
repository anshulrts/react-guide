import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Person name="Anshul" age="27" />
      <Person name="Kamal" age="26" >My hobbies: Reading</Person>
      <Person name="Varun" age="25" />
    </div>
  );
}

export default App;
