import React from 'react';


export default function Question(props) {
  return (
    <div>
      <h1>Spanish: {props.spanish} </h1>
      <h1>English: {props.english} </h1>
    </div>
  );
}
