import React from 'react';
import styled from 'styled-components';
import Aisle from './Aisle';
import AvailableSeat from './AvailableSeat';
import UnavailableSeat from './UnavailableSeat';
import { color, seatStyle } from '../theme';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

// rowData: [{seat: "A", row: 1, class: "First", occupied: false}, ...]
const Row = ({ rowData }) => {
  return (
    <StyledRow>
      {rowData.map(s =>
        <React.Fragment key={s.row + s.seat}>
          {s.aisle ? <Aisle>{s.row}</Aisle> :
            <React.Fragment>
              {s.occupied ? <UnavailableSeat /> : <AvailableSeat />}
            </React.Fragment>
          }

        </React.Fragment>
      )}
    </StyledRow>
  )
}

export default Row