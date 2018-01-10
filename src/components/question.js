import React from 'react';
import Answer from './answer';

export default function Question(props) {
console.log(props, 'question.js')
  return (
    <div>
      <h1>Spanish: {props.text} </h1>
      <Answer words={props.text}/>
    </div>
  );
}
