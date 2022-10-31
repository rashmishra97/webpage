import React, { useEffect, useState, memo, useContext } from "react";
import { CounterContext } from "./MyCounterContext";
import Rash from "./Rash";

const Practise = () => {
  console.log("Component 2 (Practise)");
  const { state, updateState } = useContext(CounterContext);
  // const { state } = useContext(CounterContext);
  //console.log("++++++++++++++++++++ ", state);
  //const [state, setState] = useState(0);
  // const updateState = () => {
  //   console.log("Dont print empty string");
  // setState(state + 1);
  // };
  use(() => {
    console.log("Component 2 use effect(Practise)");
  }, []);

  // const updateVal = () => {
  //   console.log("++++++++++++++++++++State ", state);
  // };

  return (
    <div>
      {/* <h4>{data}</h4> */}
      <p> Practise component 2</p>
      {<button onClick={updateState}>Press{state}</button>}
      <br />
      {/* <button onClick={updateState}> Press</button> */}
      <Rash />
      {/* <button onClick={myFun}>Click Me</button> */}
    </div>
  );
};

export default Practise;
