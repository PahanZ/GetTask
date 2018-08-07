// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createBlock } from '../redux/actions';
import Container from './Container/Container';
import './App.css';

type typesApp<T> = {
  addBlock: Function,
  blocks: Array<T>,
  lines: Array<T>
}

type typesProps = {
  coordX: string,
  coordY: string
}

type eventTypes = {
  clientX: string,
  clientY: string
}

class App extends React.Component<typesApp<typesProps>> {
  addBlock = (e: eventTypes) => {
    // console.log(e.clientX, e.clientY);
    const { clientX, clientY } = e;
    const { addBlock } = this.props;
    addBlock({
      coordX: clientX,
      coordY: clientY,
    });
  }

  render() {
    const { blocks, lines } = this.props;
    return (
      <Container
        blocks={blocks}
        lines={lines}
        addBlock={this.addBlock}
      />
    );
  }
}

const mapStateToProps = state => ({
  blocks: state.blocks,
  lines: state.lines,
});

const mapDispatchToProps = {
  addBlock: createBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
