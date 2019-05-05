import React from 'react';
import styled from 'styled-components';
import { seatStyle, textStyle } from '../theme/vars';

const StyledAisle = styled.div`
  ${seatStyle};
  ${textStyle};
`;

const Aisle = ({ children }) => {
  return <StyledAisle>{children}</StyledAisle>;
};

export default Aisle;
