import React, { Component, Fragment } from 'react';
import db from '../firebase/init';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Header, Logo, Navbar, StyledLink, resetStyles} from '../StyledComponents/Navbar'


class App extends Component {
  state = {
    exercises: []
  }

componentDidMount = () => {
  db.collection('exercises').get().then((snapshot) => {
    let data = []
    snapshot.forEach( item => {
      data.push(item.data(), item.id)
    })
    this.setState(() => ({exercises: data}))
  })
}

  render() {
    console.log(this.state.exercises)
    resetStyles()
    return (
      <Router>
        <Fragment>
          <Header>
            <Logo to="#">Exercises App</Logo>
          <Navbar>
            <StyledLink to="">Home</StyledLink>
            <StyledLink to="">Add Exercises</StyledLink>
          </Navbar>
          </Header>
        </Fragment>
      </Router>
    );
  }
}

export default App;
