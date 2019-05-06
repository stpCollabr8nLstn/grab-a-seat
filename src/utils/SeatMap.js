export const seatMapUrl = 'https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json';

const determineClassRank = cabinClass => {
  switch (cabinClass) {
    case 'First':
      return 1;
    case 'Business':
      return 2;
    default:
      return 3;
  }
};

export const seatSort = (a, b) => {
  const aCabinClass = determineClassRank(a.class);
  const bCabinClass = determineClassRank(b.class);

  if (aCabinClass < bCabinClass) {
    return -1;
  }
  if (aCabinClass > bCabinClass) {
    return 1;
  }
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

export const getSeatMap = async () => {
  const res = await fetch(seatMapUrl, {
    method: 'get'
  });
  const data = await res.json();

  if (res.ok && data.length) {
    return data.sort(seatSort);
  }
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

export const prepareRow = (row, aisleLocation, rowNum) => {
  return aisleLocation.forEach(aisle =>
    row.splice(aisle, 0, { row: rowNum, aisle: true, seat: `RA${aisle}` })
  );
};

export const getCabinClasses = cabin => {
  return [...new Set(cabin.map(c => c.class))];
};

export const getClassData = (cabin, cabinClass) => {
  return cabin.filter(c => c.class === cabinClass);
};

export const getCabinRows = cabinClass => {
  return [...new Set(cabinClass.map(c => c.row))];
};

export const getRowData = (cabinClass, row) => {
  return cabinClass.filter(c => c.row === row);
};

export const getCabinSeats = cabinRow => {
  return [...new Set(cabinRow.map(r => r.seat))];
};

export const addAisles = cabinSeats => {
  const control = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  let aisles = [];
  for (var i = 0; i < cabinSeats.length; i++) {
    if (cabinSeats.indexOf(control[i]) === -1) {
      aisles.push(control[i]);
    }
  }
};
