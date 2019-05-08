import React, { createContext, useState } from 'react';

export const SeatContext = createContext([{}, () => {}]);

export const SeatContextProvider = ({ children }) => {
  const [state, setState] = useState({
    selectedSeat: { row: '', seat: '', class: '' }
  });
  return <SeatContext.Provider value={[state, setState]}>{children}</SeatContext.Provider>;
};
