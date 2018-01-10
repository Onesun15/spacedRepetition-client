import React, { Component } from 'react';
// import { fetchQuestion } from '../actions/questions';

export class Answer extends React.Component{
 

 onSubmit = e => {
    e.preventDefault();
    const correct = props.answer.questions.map((answer) => {
      if(e.target.userAnswer.value === answer.answer) {
        return console.log('correct!')
       }
       else {
         return console.log('wrong')
       }
    })
    
    e.target.userAnswer.value = '';
  };
 render() {
  return (
    <div>
      <form
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <input
          type="text"
          name="userAnswer"
          id="userAnswer"
          className="text"
          maxLength="100"
          autoComplete="off"
          placeholder="Translate word to English"
          onChange={e => console.log(e.target.value)}
        />
        <input
          type="submit"
          id="answerButton"
          className="button"
          name="submit"
          value="Check"
          onClick={() => props.clickCheck()}
        />
      </form>
    </div>
  );
}
}
export default (Answer)