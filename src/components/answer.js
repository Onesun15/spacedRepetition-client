import React, { Component } from 'react';
// import { fetchQuestion } from '../actions/questions';

export class Answer extends React.Component{
 

 onSubmit = e => {
    e.preventDefault();
    let word = this.userAnswer.value
    console.log(word,  'word')
    this.userAnswer.value = ' ';
    
  };

  render() {
    return (
      <div>
      <form
        onSubmit={e => {this.onSubmit(e)}}
      >
        <input
          ref={input => this.userAnswer = input}
          type="text"
          name="userAnswer"
          id="userAnswer"
          className="text"
          maxLength="100"
          autoComplete="off"
          placeholder="Translate word to English"
          
        />
        <input
          type="submit"
          id="answerButton"
          className="button"
          name="submit"
          value="Check"
        />
      </form>
      </div>
    );
  }
}

export default (Answer)