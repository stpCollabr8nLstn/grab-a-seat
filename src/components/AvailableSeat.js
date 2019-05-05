import React, { useContext } from 'react';
import styled from 'styled-components';
import { SeatContext } from '../context/SeatContext';
import { compareSeat } from '../utils/SeatMap';
import { color, seatStyle } from '../theme/vars';

const StyledSeat = styled.button`
  ${seatStyle};
  background: ${props => (props.selected ? color.secondary : color.accent01)};
  :focus {
    outline: none;
    border: 1px solid ${color.primary};
  }
`;

// Check out this handy use of context + hooks! 🦄
const AvailableSeat = ({ seatInfo }) => {
  const [state, setState] = useContext(SeatContext);
  const isSelected = compareSeat(seatInfo, state.selectedSeat);
  return (
    <StyledSeat
      selected={isSelected}
      onClick={() => setState(state => ({ ...state, selectedSeat: seatInfo }))}
    />
  );
};

export default AvailableSeat;
