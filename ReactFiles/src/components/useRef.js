import React, { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { removeText, updateText } from "../reducers/actions";

function RefExample() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value); // Update the text state with input value
  };

  const handleClick = () => {
    dispatch(updateText(text)); // Dispatch action with updated text
  };

  const hanldeRemove = () => {
    dispatch(removeText());
    setText('');
  }

  return (
    <div className="input">
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Change Text</button>
      <button onClick={hanldeRemove}>Remove Text</button>
    </div>
  );
}

export default RefExample;