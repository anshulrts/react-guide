import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16;
    text-align: center;
  
  @media (min-width: 500px): {
    width: '450px'
  }
  `;

// It is a convention to use functions with camel case notation
const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </StyledDiv>
    );

}

export default person;