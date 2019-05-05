import React from 'react';
import styled from 'styled-components';
import { seatStyle, seatStyleLg, textStyle, textStyleLg } from '../theme/vars';

const StyledAisle = styled.div`
  ${seatStyle};
  ${textStyle};

  @media screen and (min-width: 500px) {
    ${seatStyleLg};
    ${textStyleLg};
  }
`;

const Aisle = ({ children }) => {
  return <StyledAisle>{children}</StyledAisle>;
};

export default Aisle;
