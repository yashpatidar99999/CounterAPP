import React, { useReducer } from 'react';

// Initial state for the counter
const initialState = {
  count: 0,
};

// Reducer function to handle INCREMENT and DECREMENT actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterApp = () => {
  // Use useReducer to manage the counter state
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Functions to dispatch INCREMENT and DECREMENT actions
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <p>Current Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
