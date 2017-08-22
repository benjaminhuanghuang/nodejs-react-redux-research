import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//
import Home from './Home';
import * as actions from '../actions';

const Dashboard =()=> <h1>Dashboard</h1>;
const SurveyNew =()=> <h1>SurveyNew</h1>;

class App extends Component {
  render() {
    return (
      <div className="container">
       <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/surveys/new" component={SurveyNew}/>
        </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
