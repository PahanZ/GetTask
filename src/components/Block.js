
// @flow

import React from 'react';

type BlockTypes<T> = {
    styles: T,
}

type PropsTypes = {
    width: string,
    height: string,
    position: string,
    top: string,
    left: string,
    background: string,
}

class Block extends React.Component<BlockTypes<PropsTypes>> {
  shouldComponentUpdate(nextProps: BlockTypes<PropsTypes>) {
    const { styles } = this.props;
    return styles === nextProps.styles;
  }

  render() {
    const { styles } = this.props;
    return (
      <div
        className="block"
        style={styles}
      />
    );
  }
}

export default Block;
