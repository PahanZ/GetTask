// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createBlock } from '../../redux/actions';
// import getBlockSelector from '../../redux/reducers/index';
import './Container.css';

type ContainerTypes = {
  createBlock: Function
}

class Container extends React.Component<ContainerTypes> {
  addBlock = () => {
    this.props.createBlock({});
  }

  render() {
    return (
      <div
        className="container"
        onDoubleClick={this.addBlock}
      />
    );
  }
}

const mapStateToProps = state => ({
  // blocks: getBlockSelector(state.blocks),
  blocks: state,
});

const mapDispatchToProps = {
  createBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
