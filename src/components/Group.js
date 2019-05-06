import React, { useContext } from 'react';
import { SeatContext } from '../context/SeatContext';
import Row from './Row';
import { GroupLegend, SeatLegend } from './Legend';
import { prepareRow } from '../utils/SeatMap';

export const Group = ({ seatData, group }) => {
  const [state] = useContext(SeatContext);
  const { cabinLayout } = state;
  const {
    [group]: { rowMax, startingRow }
  } = cabinLayout;
  const { aisleLocation } = cabinLayout[group];

  // Create an object of arrays {[row1: [seats], [row2: [seats]], ...]}
  // and define the identifier row at the top of the group
  const rowsArr = {};
  let rowList = [];
  for (let i = startingRow; i <= rowMax; i++) {
    rowsArr[`row${i}`] = seatData.filter(s => s.row === i);
    prepareRow(rowsArr[`row${i}`], aisleLocation, i);
    if (i === startingRow) {
      rowsArr[`row${i}`].map(r => rowList.push(r.seat));
    }
  }

  return (
    <React.Fragment>
      <GroupLegend>
        {rowList.map(seat =>
          seat.length === 1 ? <SeatLegend key={seat}>{seat}</SeatLegend> : <SeatLegend key={seat} />
        )}
      </GroupLegend>

      {Object.keys(rowsArr).map(r => (
        <Row key={r} rowData={rowsArr[r]} />
      ))}
    </React.Fragment>
  );
};
