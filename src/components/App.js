// @flow

import React from 'react';
import { connect } from 'react-redux';
import getBlockSelector from '../redux/selectors';
import Container from './Container/Container';
import './App.css';

type typesApp<T> = {
  blocks: Array<T>,
  lines: Array<T>
}

type typesObj = {
  type: String
}

const App = ({ blocks, lines }: typesApp<typesObj>) => {
  console.log(blocks, lines);
  return (
    <Container />
  );
};

const mapStateToProps = state => ({
  // blocks: state.blocks,
  lines: state.lines,
  blocks: getBlockSelector(state),
});

export default connect(mapStateToProps, null)(App);
