import React from 'react';

// It is a convention to use functions with camel case notation
const person = (props) => {
return (
    <div>
        <p onClick={props.clickPara}>I am {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
    </div>
);

}

export default person;