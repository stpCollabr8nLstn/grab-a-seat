export const seatMapUrl = 'https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json';

export async function getSeatMap() {
  const res = await fetch(seatMapUrl, {
    method: 'get'
  });
  const data = await res.json();

  if (res.ok && data.length) {
    return data;
  }
}

export const seatSort = (a, b) => {
  if (a.row < b.row) {
    return -1;
  }
  if (a.row > b.row) {
    return 1;
  }
  if (a.seat < b.seat) {
    return -1;
  }
  if (a.seat > b.seat) {
    return 1;
  }
  return 0;
};

export const prepareRow = (row, aisleType, rowNum) => {
  if (aisleType === 'first') {
    return row.splice(2, 0, { row: rowNum, aisle: true });
  }

  if (aisleType === 'business') {
    return row.splice(3, 0, { row: rowNum, aisle: true });
  }

  if (aisleType === 'economy') {
    return row
      .splice(2, 0, { row: rowNum, aisle: true })
      .splice(5, 0, { row: rowNum, aisle: true });
  }

  return row;
};

export const cabinLayout = {
  first: {
    rowMax: 10,
    startingRow: 1
  },
  business: {
    rowMax: 15,
    startingRow: 11
  },
  economy: {
    rowMax: 45,
    startingRow: 16
  }
};
