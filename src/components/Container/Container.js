// @flow

import React from 'react';
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

const Container = ({ blocks, lines, addBlock }: typesContainer<typesProps>) => {
  console.log(blocks, lines);
  return (
    <div
      className="container"
      onDoubleClick={(e: SyntheticEvent<HTMLDivElement>) => {
        addBlock(e);
      }}
    />
  );
};

export default Container;
