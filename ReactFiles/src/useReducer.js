import React, { useReducer } from 'react';

// Reducer function - It takes the current state and an action and returns the new state
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
  // Initializing state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;
