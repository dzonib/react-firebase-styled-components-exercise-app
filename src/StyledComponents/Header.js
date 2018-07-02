import styled from 'styled-components';
import reset from 'styled-reset';
import {
  injectGlobal
} from 'styled-components';
import {
  Link
} from 'react-router-dom';

export const resetStyles = () => injectGlobal `

  ${reset}

`;

export const Header = styled.header `
  font-family: 'Roboto', sans-serif;
  display: flex;
  background: #009688;
`;

export const Navbar = styled.nav `
  margin-right: 10%;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  flex: 1;
  font-weight: bold;
  text-decoration: none;
  font-size: 2em;
  padding: 0.3em 0.5em;
  color: white;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #b2dfdb;
  }

  &:active {
    color: #80CBC4
  }
`;

export const LinkContainer = styled.div `
  display: inline-block;
  font-size: 1.5em;
  padding: 0.3em 1em;
`;