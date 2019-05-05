import styled from 'styled-components';
import { color, seatStyle, seatStyleLg } from '../theme/vars';

const UnavailableSeat = styled.span`
  ${seatStyle};
  display: inline-block;
  background: ${color.lightGray};
  cursor: not-allowed;
  @media screen and (min-width: 500px) {
    ${seatStyleLg};
  }
`;

export default UnavailableSeat;
