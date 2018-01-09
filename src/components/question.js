import React from 'react';
import Answer from './answer';

export default function Question(props) {
  console.log('Text', props.text[0]);

  return (
    <div>
      <h1>Spanish: {props.text} </h1>
      <Answer />
    </div>
  );
}
