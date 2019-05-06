# Grab A Seat

### Howdy!

This application is a simple interactive seatmap
To view a working example checkout out this handy surge hosted version: [Grab a Seat](http://graceful-limit.surge.sh/)

## To run locally

- Clone the repo/download the zip
- `npm install && npm start`
- View app at `localhost:3000`

## Notes

- I took a stab at implementing hooks to handle app state
  - As a result, to save time I implemented [cabinLayout](https://github.com/stpCollabr8nLstn/grab-a-seat/blob/3043f967c5b3bfd5c7d51f36f1f94c9954215db4/src/context/SeatContext.js#L8) as an object that's read from the context (hard-coded - ouch, I know)
  - BUT now that the basic ground work is there I've added some helper functions in [SeatMap.js](https://github.com/stpCollabr8nLstn/grab-a-seat/blob/3043f967c5b3bfd5c7d51f36f1f94c9954215db4/src/utils/SeatMap.js#L67) to start to build that object programatically

## TODOs

- TESTS TESTS TESTS
  - I'm most bummed that I ran out of time to implement any testing
  - My preference would be to use `react-testing-library`
