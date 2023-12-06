import { configureStore } from "@reduxjs/toolkit";
import { DECREMENT, MULTIPLY, REMOVE_TEXT, RESET, UPDATE_TEXT } from "./actions";


const initialState = {
  inputText: '',
  number: 1,
}


const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TEXT:
      return {
        ...state,
        inputText: ''
      }
    case UPDATE_TEXT:
      return {
        ...state,
        inputText: action.payload
      }
    case MULTIPLY:
      return {
        ...state,
        number: state.number * 2
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    case RESET:
      return {
        ...state,
        number: 1
      }
    default: return state
  }
}

export const store = configureStore({reducer: taskReducer});

export const dispatch = store.dispatch;

export const getState = store.getState;
