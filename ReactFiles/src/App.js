import React, { useState, useMemo, useCallback, useEffect } from 'react';
import RefExample from './useRef';
import './App.css';
import Counter from './useReducer';
import TextContext from './Context';


const calculateFactorial = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const innerText = "This is to demonstrate useContext Hook";

const App = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  const handleClick = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  useEffect(() => {
    console.log(`Number changed to: ${number}`);
  }, [number]); // Run the effect when 'number' changes

  return (
    <TextContext.Provider value={innerText}>
      <div className='flex'>
        <h2>Factorial of {number} is: {factorial}</h2>
        <button onClick={handleClick}>Increment Number</button>
        <Counter />
      </div>
    </TextContext.Provider>
  );
};


export default App;
