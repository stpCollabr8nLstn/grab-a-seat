import React from 'react';
import { Airplane } from './components/Airplane';

import { SeatContextProvider } from './context/SeatContext';

export default () => {
  return (
    <SeatContextProvider>
      <Airplane />
    </SeatContextProvider>
  );
};
