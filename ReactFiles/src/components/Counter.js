import React, { useState } from 'react';
import Button from '../atoms/Button/Button';
import { DECREMENT, MULTIPLY, RESET } from '../reducers/actions';
import { getState, dispatch } from '../reducers/store';
import InnerComponent1 from './InnerComponent1';


const Counter = () => {
  const { number } = getState();
  const [counter, setCounter] = useState(number);
   
  const handleMultiply = () => {
    dispatch({
      type: MULTIPLY,
    });
    const { number } = getState();
    setCounter(number);
  }; 

  const hanldeSubtract = () => {
   dispatch({
    type: DECREMENT,
   });
   const { number } = getState();
   setCounter(number);
  }

  const handleReset = () => {
   dispatch({
     type: RESET,
   });
   const { number } = getState(); 
   setCounter(number);
  }

  return (
    <div>
      <p className='counter'>Count: {counter}</p>
      <div className='buttons'>
        <Button className='buttons' buttonType='primary' onClick={handleMultiply} content="Multiply" />
        <Button className='buttons' buttonType='primary' onClick={hanldeSubtract} content="Decrement" />
        <Button className='buttons' buttonType='secondary' color='grey' onClick={handleReset} content="Reset" />
      </div>
      <InnerComponent1 />
    </div>
  );
};

export default Counter;
