import React, { Component } from 'react';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
        <div className="ui two column padded grid">
            <div className="five wide stretched column">
              <NavBar/>
            </div>
            <div className="eleven wide stretched column">
              {this.props.children}
            </div>
        </div>
    );
  }
}
