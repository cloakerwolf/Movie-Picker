import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Movies!</h1>
            <h4><i>Movie List!</i></h4>
          </header>
          <br />
          <Route exact path="/" component={Home} />
          {/* send the id from the clicked on poster */}
          <Route path="/Edit/:id" component={Edit} />
          <Route path="/Details/:id" component={Details} />
         
        </div>
      </Router>
    );
  }
}

export default connect()(App);
