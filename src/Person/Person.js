import React from 'react';

// It is a convention to use functions with camel case notation
const person = (props) => {
return <p>I am {props.name} and I am {props.age} years old.</p>
}

export default person;