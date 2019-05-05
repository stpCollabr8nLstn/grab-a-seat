import React from 'react';
import { Airplane } from './components/Airplane';

import { AirplaneLayoutProvider } from './context/AirplaneLayout';
import { SeatContextProvider } from './context/SeatContext';

export default () => {
  return (
    <SeatContextProvider>
      <AirplaneLayoutProvider>
        <Airplane />
      </AirplaneLayoutProvider>
    </SeatContextProvider>
  );
};
