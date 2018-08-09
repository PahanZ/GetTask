// @flow

import React from 'react';
import randomColor from 'randomcolor';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Block from '../Block';
import './Container.css';

type typesContainer<T> = {
  addBlock: Function,
  blocks: Array<T>,
  lines: Array<T>
}

type typesProps = {
  coordX: string,
  coordY: string
}

const defaultStyles = {
  width: '100px',
  height: '50px',
  position: 'absolute',
};

const Container = ({ blocks, lines, addBlock }: typesContainer<typesProps>) => {
  console.log(blocks, lines);
  return (
    <div
      className="container"
      onDoubleClick={(e: SyntheticEvent<HTMLDivElement>) => {
        addBlock(e);
      }}
    >
      {blocks.map((el, i) => {
        const top = `${Number(el.coordY) - parseInt(defaultStyles.height, 10) / 2}px`;
        const left = `${Number(el.coordX) - parseInt(defaultStyles.width, 10) / 2}px`;
        const background = randomColor();
        const styles = {
          ...defaultStyles, top, left, background,
        };
        return (
          <Block key={String(i)} styles={styles} />
        );
      })}
    </div>
  );
};

export default DragDropContext(HTML5Backend)(Container);
