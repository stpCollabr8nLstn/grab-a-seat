import React, { createContext } from 'react';
import { cabinLayout } from '../utils/SeatMap';

export const AirplaneLayout = createContext();

export const AirplaneLayoutProvider = ({ children }) => {
  return <AirplaneLayout.Provider value={cabinLayout}>{children}</AirplaneLayout.Provider>;
};
