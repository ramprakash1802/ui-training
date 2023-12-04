import React, { useReducer } from 'react';
import InnerComponent1 from './InnerComponent1';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MULTIPLY':
      return { count: state.count * 100 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Mulltiply</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <InnerComponent1 />
    </div>
  );
};

export default Counter;
