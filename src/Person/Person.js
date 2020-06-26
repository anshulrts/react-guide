import React from 'react';
import './Person.css';
import Radium from 'radium';

// It is a convention to use functions with camel case notation
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
return (
    <div className="Person" style={style}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changed} />
    </div>
);

}

export default Radium(person);