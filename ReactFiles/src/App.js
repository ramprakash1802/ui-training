import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSelector } from "react-redux";

import './App.css';
import Counter from './components/Counter';
import TextContext from './Context';
import Button from './atoms/Button/Button';
import TextChanger from './components/TextChanger';


const calculateFactorial = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const App = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => calculateFactorial(number), [number]);


  const text = useSelector(state => state.inputText);


  const handleClick = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  useEffect(() => {
    console.log(`Number changed to: ${number}`);
  }, [number]); // Run the effect when 'number' changes

  return (
    <TextContext.Provider value={text}>
      <div className='flex'>
        <h2>Factorial of {number} is: {factorial}</h2>
        <Button buttonType='primary' onClick={handleClick} content='Increment Number'/>
        <Counter />
        <TextChanger />
      </div>
    </TextContext.Provider>
  );
};


export default App;
