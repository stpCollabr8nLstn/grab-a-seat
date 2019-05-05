import React from 'react';
import styled from 'styled-components';
import { seatStyle, seatStyleLg, textStyle, textStyleLg } from '../theme/vars';

const StyledSeatLegend = styled.span`
  ${seatStyle};
  ${textStyle};

  @media screen and (min-width: 500px) {
    ${seatStyleLg};
    ${textStyleLg};
  }
`;

const StyledGroupLegend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const GroupLegend = ({ children }) => <StyledGroupLegend>{children}</StyledGroupLegend>;

export const SeatLegend = ({ children }) => <StyledSeatLegend>{children}</StyledSeatLegend>;
