import React, { useState } from "react";
import Button from "../atoms/Button/Button";
import { REMOVE_TEXT, UPDATE_TEXT } from "../reducers/actions";
import { dispatch } from "../reducers/store";

function TextChanger() {

  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value); 
  };

  const handleClick = () => {
    dispatch({
      type: UPDATE_TEXT,
      payload: text,
    });
  }; 

  const hanldeRemove = () => {
    dispatch({
      type: REMOVE_TEXT,
    });
    setText('');
  }

  return (
    <div className="input">
      <input type="text" value={text} onChange={handleChange}/>
      <Button onClick={handleClick} content='Change Text' />
      <Button className='remove_button' buttonType='secondary' onClick={hanldeRemove} content='Remove Text'/>
    </div>
  );
}

export default TextChanger;