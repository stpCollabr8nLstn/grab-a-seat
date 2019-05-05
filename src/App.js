import React from 'react';
import { Airplane } from './components/Airplane';

import { AirplaneLayoutProvider } from './context/AirplaneLayout';

function App() {
  return (
    <AirplaneLayoutProvider>
      <Airplane />
    </AirplaneLayoutProvider>
  );
}

export default App;
