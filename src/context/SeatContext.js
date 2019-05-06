import React, { createContext, useState } from 'react';

export const SeatContext = createContext([{}, () => {}]);

export const SeatContextProvider = ({ children }) => {
  const [state, setState] = useState({
    selectedSeat: { row: '', seat: '', class: '' },
    cabinLayout: {
      first: {
        rowMax: 10,
        startingRow: 1,
        aisleLocation: [2]
      },
      business: {
        rowMax: 15,
        startingRow: 11,
        aisleLocation: [3]
      },
      economy: {
        rowMax: 45,
        startingRow: 16,
        aisleLocation: [2, 7]
      }
    }
  });
  return <SeatContext.Provider value={[state, setState]}>{children}</SeatContext.Provider>;
};
