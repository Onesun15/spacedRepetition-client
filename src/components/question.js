import React from 'react';


export default function Question(props) {
  return (
    <div>
      <h1>Spanish: {props.question} </h1>
      <h1>English: {props.answer} </h1>
    </div>
  );
}
