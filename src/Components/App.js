import React, { Component, Fragment } from 'react';
import db from '../firebase/init';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import {
  resetStyles,
} from '../StyledComponents/Header';
import Header from './Layout/Header';
import AddExercise from './Layout/AddExercise'
// import Footer from './Layout/Footer';

class App extends Component {
  state = {
    exercises: [],
    muscles: []
  };

  componentDidMount = () => {
    db.collection('exercises')
      .get()
      .then(snapshot => {
        let exerciseData = [];
        snapshot.forEach(item => {
          const id = item.id;
          exerciseData.push({ id, ...item.data() });
        });
        this.setState(() => ({ exercises: exerciseData }));
      })
      .then(() => {
        let musclesGroups = this.state.exercises.map(
          exercise => exercise.muscles
        );
        this.setState(() => ({muscles: musclesGroups}))
      });
  };

  render() {
    resetStyles();
    return (
      <Router>
        <Fragment>
          <Header />
          {/* <Footer muscles={this.state.muscles} /> */}

        <Route path="/add-exercise" render={() => <AddExercise/>}/>

        </Fragment>
      </Router>
    );
  }
}

export default App;
