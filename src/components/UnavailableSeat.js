import styled from 'styled-components';
import { color, seatStyle } from '../theme/vars';

const UnavailableSeat = styled.span`
  ${seatStyle};
  display: inline-block;
  background: ${color.lightGray};
  cursor: not-allowed;
`;

export default UnavailableSeat;
