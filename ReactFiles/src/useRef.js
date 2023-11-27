import React, { useRef } from "react";

function RefExample() {
  const inputElement = useRef();

  const changeColor = () => {
    inputElement.current.style.backgroundColor = 'red';
  };

  return (
    <div className="input">
      <input type="text" ref={inputElement} />
      <button onClick={changeColor}>Focus Input</button>
      {console.log('Hi')}
    </div>
  );
}

export default RefExample;