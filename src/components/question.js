import React from 'react';
import Answer from './answer';

export default function Question(props){
  console.log(props.firstQuestion, 'First question props')
    return ( 
      <div>
         <p>Did you guess?</p>
        <h1>{props.firstQuestion}</h1>
        <Answer />
      </div>
    );
  }






