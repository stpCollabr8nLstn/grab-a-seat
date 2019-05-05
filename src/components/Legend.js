import React from 'react';
import styled from 'styled-components';
import { seatStyle, textStyle } from '../theme/vars';

const StyledSeatLegend = styled.span`
  ${seatStyle};
  ${textStyle};
`;

const StyledGroupLegend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const GroupLegend = ({ children }) => <StyledGroupLegend>{children}</StyledGroupLegend>;

export const SeatLegend = ({ children }) => <StyledSeatLegend>{children}</StyledSeatLegend>;
