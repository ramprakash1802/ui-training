import { useState, useMemo, useCallback, useEffect } from 'react';
import RefExample from './useRef';
import './App.css';
import Counter from './useReducer';


const calculateFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

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
    <div className='flex'>
      <h2>Factorial of {number} is: {factorial}</h2>
      <button onClick={handleClick}>Increment Number</button>
      <RefExample/>
      <Counter/>
    </div>
  );
};


export default App;
