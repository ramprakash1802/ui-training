import React, { useRef } from "react";

function RefExample() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div className="input">
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      {console.log('Hi')}
    </div>
  );
}

export default RefExample;