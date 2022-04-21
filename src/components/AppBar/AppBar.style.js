import styled from 'styled-components';
import { bgColor, borderColor } from '../../assets/stylesVariables';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 20px;
  background-color: ${bgColor};
  border-bottom: 1px solid ${borderColor};
`;
