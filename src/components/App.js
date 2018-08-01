// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { typeReactRedux } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

type typesApp = {
  test: string
}

const App = ({ test }: typesApp) => {
  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
            Welcome to React
        </h1>
      </header>
      <p className="App-intro">
          To get started, edit
        {' '}
        <code>
            src/App.js
        </code>
        {' '}
        and save to reload.
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  test: state.test,
});

export default connect(mapStateToProps, null)(App);
