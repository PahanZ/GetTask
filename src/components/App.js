import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.test);    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test
})

export default connect(mapStateToProps, null)(App)
