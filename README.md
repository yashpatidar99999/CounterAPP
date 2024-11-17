# Learnings from Building a Counter Application with `useReducer`

This document summarizes the key concepts learned while building a simple counter application in React using the `useReducer` hook. The app allows users to increment and decrement a counter value, demonstrating how to manage state transitions in React efficiently.

## Key Learnings

### 1. **Using `useReducer` for State Management**
   - `useReducer` is an alternative to `useState` that is useful for managing more complex state logic.
   - It takes a reducer function and an initial state, returning the current state and a `dispatch` function to trigger state updates.

### 2. **Reducer Function**
   - A **reducer** is a function that defines how the state should change based on different action types (like `INCREMENT` and `DECREMENT`).
   - The reducer handles these actions and returns a new state object.

   ```javascript
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
