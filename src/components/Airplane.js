import React from 'react';
import styled from 'styled-components';
import { getSeatMap, seatSort, getClassData } from '../utils/SeatMap';
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
    seatMap: []
  };

  async componentDidMount() {
    const data = await getSeatMap();
    this.setState({
      seatMap: data
    });
  }

  getClassSeatMap(group) {
    const { seatMap } = this.state;
    return seatMap.filter(s => s.class === group).sort(seatSort);
  }

  render() {
    const { seatMap } = this.state;
    return (
      <StyledAirplane>
        <Group seatData={getClassData(seatMap, 'First')} group="first" />
        <Group seatData={getClassData(seatMap, 'Business')} group="business" />
        <Group seatData={getClassData(seatMap, 'Economy')} group="economy" />
      </StyledAirplane>
    );
  }
}

export { Airplane };
