import React, { useState } from 'react';
import styled from 'styled-components';
import { color, seatStyle } from '../theme';

const StyledSeat = styled.button`
  ${seatStyle};
  background: ${props => props.selected ? color.accent01 : color.primary};
  :focus {
    outline: none;
    border: 1px solid ${color.accent02};
  }
`;

const AvailableSeat = () => {
  const [selected, toggleSelected] = useState(false);
  return (
    <StyledSeat selected={selected} onClick={() => toggleSelected(!selected)} />
  )
}

export default AvailableSeat