// @flow

import React from 'react';
import randomColor from 'randomcolor';
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
  width: '200px',
  height: '100px',
  position: 'absolute',
  border: '1px solid grey',
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

export default Container;
