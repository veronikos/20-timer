import React, { useEffect, useState } from "react";


export const Buddy = (props) => {
  const [state, setState] = useState(0);

  const increase = () => {
      setState(prevState => prevState + 1)
  }

  useEffect(() => {}) 

  return (
  <div>
      <span>Hello, Im your Buddy. My name is {props.name}</span>
      <button onClick={increase}>You clicked me {state} times</button>
  </div>
  );
};
