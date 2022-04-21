import styled from 'styled-components';
import { secondaryColor } from '../../assets/stylesVariables';

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 45px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

export const Info = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
  line-height: 1.2;
  color: ${secondaryColor};
`;

export const SubTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
`;

export const List = styled.ul`
  margin-bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
