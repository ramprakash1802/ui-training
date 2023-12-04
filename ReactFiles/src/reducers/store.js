import { configureStore } from "@reduxjs/toolkit";
import { REMOVE_TEXT, UPDATE_TEXT } from "./actions";


const initialState = {
  inputText: '',
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
    default: return state
  }
}

export const store = configureStore({reducer: taskReducer});
