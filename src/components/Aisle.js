import React from 'react';
import styled from 'styled-components';
import { color, seatStyle } from '../theme';

const StyledAisle = styled.div`
  ${seatStyle};
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${color.textGray};
`;

const Aisle = ({ children }) => {
  return <StyledAisle>{children}</StyledAisle>;
};

export default Aisle;
