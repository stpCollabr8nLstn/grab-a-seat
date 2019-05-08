import { useContext } from 'react';

import { SeatContext } from '../context/SeatContext';

export const UpdateContext = () => {
  const [state, setState] = useContext(SeatContext);

  const updateCurrentRow = classRowCount => {
    console.log(state.currentRow);
    setState(state => ({ ...state, currentRow: state.currentRow + classRowCount }));
  };

  return {
    updateCurrentRow
  };
};
