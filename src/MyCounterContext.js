import React, { createContext, useMemo, useState } from "react";

export const CounterContext = createContext(() => {});

export const CounterProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const updateState = () => {
    setState(state + 1);
  };

  //   const counter = useMemo(() => state);
  return (
    <CounterContext.Provider
      value={{
        state: state,
        updateState,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
