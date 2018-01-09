import React from 'react';
import Answer from './answer';

export default function Question(props) {
  console.log('Text', props.text[0])

    return (
      <div>
         <p>Did you guess?</p>
        <h1>Hello World! </h1>
        <h1>{props.text}</h1>
        <Answer  />
      </div>
    );
}



