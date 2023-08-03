import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red': '#ccc'} ;
  background: 
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input{
  border-color: 'red';
  background: rgba(214, 102, 102, 0.384);
}

.&.invalid label{
  color: red;
}

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  // * used for inline style condition
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(!enteredValue.trim().length){
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
        {/* // ! add css class dynamically */}


      {/* <div className={`form-control ${!isValid ? 'invalid' :'' }` } > */}
        {/* <FormControl className={!isValid && 'invalid'}> */}
      <FormControl invalid={!isValid}>

        <label
        // ! normal approach to dynamically add class
        // style={{
        //   color: !isValid? 'red' : 'black'
        // }}
        >Course Goal</label>
        <input
        // ! normal approach to dynamically add class
        // style={{
        //   borderColor: !isValid? 'red' : '#ccc',
        //   background:  !isValid? 'salmon' : 'transparent'
        //   }}
        type="text" onChange={goalInputChangeHandler} />
        </FormControl>
      {/* </div> */}


      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
