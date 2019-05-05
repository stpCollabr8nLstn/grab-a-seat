import React, { useContext } from 'react';
import { AirplaneLayout } from '../context/AirplaneLayout';
import Row from './Row';
import { prepareRow } from '../utils/SeatMap';

export const Group = ({ seatData, group }) => {
  const {
    [group]: { rowMax, startingRow }
  } = useContext(AirplaneLayout);

  // Create an object of arrays {[row1: [seats], [row2: [seats]], ...]}
  const rowsArr = {};
  for (let i = startingRow; i <= rowMax; i++) {
    rowsArr[`row${i}`] = seatData.filter(s => s.row === i);
    prepareRow(rowsArr[`row${i}`], group, i);
  }

  return Object.keys(rowsArr).map(r => <Row key={r} rowData={rowsArr[r]} />);
};
