import React, { Component } from 'react';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div className="ui grid">
          <div className="five wide column">
              <NavBar/>
          </div>
          <div className="eleven wide column">
              {this.props.children}
          </div>
      </div>
    );
  }
}
