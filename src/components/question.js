import React from 'react';
import Answer from './answer';

export default function Question(props) {
  return (
    <div>
      <h1>Spanish: {props.spanish} </h1>
      <h1>English: {props.english} </h1>
      <Answer />
    </div>
  );
}
