import React from 'react';
import styled from 'styled-components';
import AvailableSeat from './AvailableSeat';
import UnavailableSeat from './UnavailableSeat';

export const FirstClass = ({ seatData, seatMax = 10 }) => {
  console.log(seatData)
  return (
    seatData.map(s => (
      <React.Fragment key={s.row + s.seat}>
        {s.occupied ? <UnavailableSeat /> : <AvailableSeat />}
      </React.Fragment>
    ))
  )
}