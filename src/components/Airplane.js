import React from 'react';
import styled from 'styled-components';
import { getSeatMap, getClassData } from '../utils/SeatMap';
import { Group } from './Group';

const StyledAirplane = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');

  padding: 0;
  margin: 0;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
`;

class Airplane extends React.Component {
  state = {
    seatMap: [],
    cabinClasses: ['First', 'Business', 'Economy']
  };

  async componentDidMount() {
    const data = await getSeatMap();
    this.setState({
      seatMap: data
    });
  }

  render() {
    const { seatMap, cabinClasses } = this.state;
    return (
      <StyledAirplane>
        {cabinClasses.map(c => (
          <Group key={c} seatData={getClassData(seatMap, c)} />
        ))}
      </StyledAirplane>
    );
  }
}
export { Airplane };
