import React from 'react';
import styled from 'styled-components';
import { getSeatMap, seatSort } from '../utils/SeatMap';
import { BusinessClass } from './BusinessClass';
import { FirstClass } from './FirstClass';
import { Economy } from './Economy';

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
        <FirstClass seatData={this.getClassSeatMap('First')} />
        <BusinessClass seatData={this.getClassSeatMap('Business')} />
        <Economy seatData={this.getClassSeatMap('Economy')} />
      </React.Fragment>
    )
  }
}

export { Airplane }