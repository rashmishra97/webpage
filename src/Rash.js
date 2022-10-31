import React, { memo, useContext, useEffect } from "react";
import { CounterContext } from "./MyCounterContext";

const Rash = () => {
  console.log(" componenet 3 (rash) ");
  //const { state } = useContext(CounterContext);
  const { state, updateState } = useContext(CounterContext);
  // const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Component 3 use effect (rash)");
  }, []);

  return (
    <>
      <p> Rash component</p> {<p></p>}
      <button onClick={updateState}>Click me{state}</button>
    </>
  );
};
export default memo(Rash);
