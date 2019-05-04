export const seatMapUrl = 'https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json';

export async function getSeatMap() {
  const res = await fetch(seatMapUrl, {
    method: 'get',
  });
  const data = await res.json();

  if (res.ok && data.length) {
    return data;
  }
}

export const seatSort = (a, b) => {
  if (a.row < b.row) { return -1 };
  if (a.row > b.row) { return 1 };
  if (a.seat < b.seat) { return -1 };
  if (a.seat > b.seat) { return 1 };
  return 0;
}
