
// @flow

import React from 'react';
import { DragLayer } from 'react-dnd';


type BlockTypes<T> = {
    styles: T,
    isDragging: Object
}

type PropsTypes = {
    width: string,
    height: string,
    position: string,
    top: string,
    left: string,
    background: string,
}

const getItemStyles = (props) => {
  console.log(props);
  // if (!currentOffset) {
  //   return {
  //     display: 'none',
  //   };
  // }
  // const { x, y } = props.currentOffset;
  // const transform = `translate(${x}px, ${y}px)`;
  // return {
  //   transform,
  //   WebkitTransform: transform,
  // };
};

const collect = (monitor) => {
  console.log(monitor.getItem());
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
};


class Block extends React.Component<BlockTypes<PropsTypes>> {
  shouldComponentUpdate(nextProps: BlockTypes<PropsTypes>) {
    const { styles } = this.props;
    return styles === nextProps.styles;
  }

  render() {
    const { styles, isDragging } = this.props;
    // if (!isDragging) {
    //   return null;
    // }
    return (
      <div style={styles}>
        <div
          className="block"
          style={getItemStyles(this.props)}
        />
      </div>
    );
  }
}

export default DragLayer(collect)(Block);
