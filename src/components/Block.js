
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

  dragStart = (e: EventTypes<PropsTypes>) => {
    this.setState(prevState => ({ isDrag: !prevState.isDrag }));
    this.move(e);
  }

  move = (e: EventTypes<PropsTypes>) => {
    const { isDrag } = this.state;
    if (isDrag === true) {
      e.target.style.left = `${e.pageX - e.target.offsetWidth / 2}px`;
      e.target.style.top = `${e.pageY - e.target.offsetHeight / 2}px`;
    }
  }

  dragEnd = () => {
    this.setState(prevState => ({ isDrag: !prevState.isDrag }));
  }

  render() {
    const { styles } = this.props;
    return (
      <div
        style={styles}
        className="block"
        onMouseDown={(e) => { this.dragStart(e); }}
        onMouseMove={(e) => { this.move(e); }}
        onMouseUp={() => { this.dragEnd(); }}
        role="button"
        tabIndex="0"
      />
    );
  }
}

export default Block;
