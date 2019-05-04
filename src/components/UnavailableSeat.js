import styled from 'styled-components';
import { color, seatStyle } from '../theme';

const UnavailableSeat = styled.span`
  ${seatStyle};
  display: inline-block;
  background: ${color.lightGray};
  cursor: not-allowed;
`;

export default UnavailableSeat