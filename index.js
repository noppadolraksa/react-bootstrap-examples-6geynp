import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';

import Test from "./Test"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       
        <Test />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
