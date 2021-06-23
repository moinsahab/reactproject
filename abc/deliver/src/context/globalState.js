import React, { useContext, useReducer, useEffect } from "react";

import UnitContext from "./context";
import { reducer } from "./reducer";

const UnitContextProvider = ({ children }) => {
  const initialState = useContext(UnitContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <UnitContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContextProvider;
