import React from 'react';
import styled from 'styled-components';
import { getSeatMap, seatSort } from '../utils/SeatMap';
import { Group } from './Group';

class Airplane extends React.Component {
  state = {
    seatMap: []
  }

  async componentDidMount() {
    const data = await getSeatMap();
    this.setState({
      seatMap: data
    })
  }

  getClassSeatMap(group) {
    const { seatMap } = this.state;
    return seatMap.filter(s => s.class === group).sort(seatSort);
  }

  render() {
    return (
      <React.Fragment>
        <Group seatData={this.getClassSeatMap('First')} group='first' />
        <Group seatData={this.getClassSeatMap('Business')} group='business' />
        <Group seatData={this.getClassSeatMap('Economy')} group='economy' />
      </React.Fragment>
    )
  }
}

export { Airplane }