import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "./GlobalReducer";

const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadGames = (games) => {
    dispatch({ payload: games, type: "LOAD_DATA_GAMES" });
  };

  return (
    <GlobalContext.Provider
      value={{
        loadGames,
        globalState: state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const { object } = PropTypes;

GlobalContextProvider.defaultProps = {
  children: {},
};

GlobalContextProvider.propTypes = {
  children: object,
};

export { GlobalContext, GlobalContextProvider };
