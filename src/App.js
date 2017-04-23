import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { history } from './Stores/Router';
import AnotherComponent from './AnotherComponent'
import { observer } from 'mobx-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <AnotherComponent/>
        </Router>
      </div>
    );
  }
}

export default observer(App);
