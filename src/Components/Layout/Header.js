import React, { Fragment } from 'react';
import {
  Header as Head,
  Logo,
  Navbar,
  StyledLink,
  LinkContainer
} from '../../StyledComponents/Header';


const Header = () => (
  <Fragment>
    <Head>
      <Logo to="#">Exercises App</Logo>
      <Navbar>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <StyledLink to="/add-exercise">Add Exercises</StyledLink>
        </LinkContainer>
      </Navbar>
    </Head>
  </Fragment>
);

export default Header