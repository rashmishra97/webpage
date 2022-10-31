import "./App.css";
import React, { useEffect, useState, memo, useContext } from "react";
import Practise from "./Practise";
import { CounterContext } from "./MyCounterContext";

// function Car(props) {
//   return (
//     <>
//       <p>I am a {props.type} Car!4</p>
//       <p> I am a car's component paragraph4</p>
//     </>
//   );
// }

// this is coomponent
// const MyFun = (props) => {
//   return (
//     <>
//       <p>I am a {props.color} !color 3</p>
//       <p>I am inside Myfun component 3</p>
//       <Car type="jaquar" />
//     </>
//   );
// };

function App() {
  console.log("component 1 (app)");
  const { state, updateState } = useContext(CounterContext);

  // const [state, setState] = useState(0);
  // const [newstate, setNewState] = useState(0);

  useEffect(() => {
    console.log("component 1 (app)  use effect");
  }, []);

  // const updateState = () => {
  //   setNewState(newstate + 1);
  // };

  return (
    <header className="App-header">
      I am first under App.js file
      {/* <Car design="any car" /> */}
      {<button onClick={updateState}> Press {state}</button>}
      <Practise />
      {/* <MyFun color="black" /> */}
      {/* <Rash /> */}
    </header>
  );
}

export default App;
