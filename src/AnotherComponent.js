import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

class AnotherComponent extends Component {
  render() {
    return (
      <div className="AnotherComponent">
        <Route path="/" render={() => <div className="comp">AnotherComponent</div>}/>
        <Route path="/eee" render={() => <div className="comp">AnotherComponent eee</div>}/>
      </div>
    );
  }
}

export default withRouter(AnotherComponent);
