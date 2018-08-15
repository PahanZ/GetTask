
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

type StateTypes = {
  isDrag: boolean
}

type EventTypes<T> = {
  target: HTMLDivElement,
  style: T,
  pageX: number,
  pageY: number
}


class Block extends React.Component<BlockTypes<PropsTypes>, StateTypes> {
  state = {
    isDrag: false,
  };

  shouldComponentUpdate(nextProps: BlockTypes<PropsTypes>) {
    const { styles } = this.props;
    return styles === nextProps.styles;
  }

  setPosition = (e: EventTypes<PropsTypes>) => {
    const left = e.pageX;
    const top = e.pageY;

    const position = {
      left: left - e.target.offsetWidth / 2,
      top: top - e.target.offsetHeight / 2,
    };

    return position;
  };

  dragStart = (e: EventTypes<PropsTypes>) => {
    this.setState((prevState: StateTypes) => ({ isDrag: !prevState.isDrag }));
    this.setPosition(e);
  }

  move = (e: EventTypes<PropsTypes>) => {
    const { isDrag } = this.state;
    const { left, top } = this.setPosition(e);
    if (!isDrag) {
      return;
    }

    e.target.style.left = `${left}px`;
    e.target.style.top = `${top}px`;
  }

  dragEnd = () => {
    this.setState((prevState: StateTypes) => ({ isDrag: !prevState.isDrag }));
  }

  render() {
    const { styles } = this.props;
    return (
      <div
        style={styles}
        className="block"
        onPointerDown={this.dragStart}
        onPointerMove={this.move}
        onPointerUp={this.dragEnd}
        onPointerCancel={this.dragEnd}
        role="button"
        tabIndex="0"
      />
    );
  }
}

export default Block;
