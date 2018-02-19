import * as React from 'react';

import PizzaSizes from '../containers/PizzaSizes';
import Cart from '../containers/Cart';
import '../App.css';

const logo = require('../logo.svg');

export class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <PizzaSizes name="Waldo" />
        <hr />
        <Cart />
      </div>
    );
  }
}
