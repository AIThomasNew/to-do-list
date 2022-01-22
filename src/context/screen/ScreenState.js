import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from '../types';
import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id) => dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
