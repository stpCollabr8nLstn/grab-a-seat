export const seatMapUrl = 'https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json';

export const getSeatMap = async () => {
  const res = await fetch(seatMapUrl, {
    method: 'get'
  });
  const data = await res.json();

  if (res.ok && data.length) {
    return data;
  }
};

export const updateSeatMap = () => {
  // TODO: Add fetch with post assuming I know what the API requires
  // For now just save in localStorage
};

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

export const compareSeat = (seatA, seatB) => {
  if (seatA.class === seatB.class) {
    if (seatA.row === seatB.row) {
      if (seatA.seat === seatB.seat) {
        return true;
      }
    }
  }
  return false;
};

export const prepareRow = (row, aisleType, rowNum) => {
  const { aisleLocation } = cabinLayout[aisleType];
  return aisleLocation.forEach(aisle =>
    row.splice(aisle, 0, { row: rowNum, aisle: true, seat: `RA${aisle}` })
  );
};

export const cabinLayout = {
  first: {
    rowMax: 10,
    startingRow: 1,
    aisleLocation: [2]
  },
  business: {
    rowMax: 15,
    startingRow: 11,
    aisleLocation: [3]
  },
  economy: {
    rowMax: 45,
    startingRow: 16,
    aisleLocation: [2, 7]
  }
};
