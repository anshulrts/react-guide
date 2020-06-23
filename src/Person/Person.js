import React from 'react';

// It is a convention to use functions with camel case notation
const person = () => {
return <p>I am a Person and I am {Math.floor(Math.random() * 20)} years old.</p>
}

export default person;