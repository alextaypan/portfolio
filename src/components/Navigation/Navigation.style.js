import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  primaryColor,
  timingFn,
  accentColor,
} from '../../assets/stylesVariables';

const commonLinkStyles = `
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: ${primaryColor};
  transition: color 250ms ${timingFn};

  &:hover,
  &:focus {
    color: ${accentColor};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkResume = styled.a`
  ${commonLinkStyles}
`;

export const Link = styled(NavLink)`
  ${commonLinkStyles}

  &.active {
    color: ${accentColor};
  }

  margin-right: 70px;
`;
