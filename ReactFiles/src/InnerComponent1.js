import React, { useContext  } from "react";
import { TextContext } from './Context';

function InnerComponent1() {

  const text = useContext(TextContext);
  return (
    <div>
      <p>{text}</p>    
    </div>
  );
}

export default InnerComponent1;