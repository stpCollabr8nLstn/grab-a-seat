import React from 'react';
import Row from './Row';
import { GroupLegend, SeatLegend } from './Legend';
import { defineRows, getRowData, getCabinSeats, getAisles } from '../utils/SeatMap';

export const Group = ({ seatData }) => {
  const seatDataExists = seatData.length;
  let startingRow, rowMax, aisleLocations, firstRowObj, rowSeatArr;
  if (seatDataExists) {
    startingRow = seatDataExists ? seatData[0].row : null;
    firstRowObj = getRowData(seatData, startingRow);
    rowSeatArr = getCabinSeats(firstRowObj);
    rowMax = seatDataExists ? seatData.length / firstRowObj.length + startingRow : null;
    aisleLocations = seatDataExists ? getAisles(rowSeatArr) : null;
  }

  const { rowList, rowsArr } = defineRows(seatData, rowMax, startingRow, aisleLocations);

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
