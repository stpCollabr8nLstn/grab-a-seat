import React from 'react';
import styled from 'styled-components';
import { BusinessClass } from './BusinessClass';
import { FirstClass } from './FirstClass';
import { Economy } from './Economy';

export const StyledAirplane = styled.div`
 background: pink;
`;

class Airplane extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FirstClass />
        <BusinessClass />
        <Economy />
      </React.Fragment>
    )
  }
}

export { Airplane }