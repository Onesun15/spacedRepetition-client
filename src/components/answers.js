import React from 'react';
import requiresLogin from './requires-login';

import { fetchAnswer } from '../actions/answers';


function Answer(props) {
  console.log('ANSWER-COMPONENT', props.answer);
  const onSubmit = e => {
    e.preventDefault();
    const isCorrect = e.target.userAnswer.value === props.answer;
    console.log('e.target.value = ', e.target.userAnswer.value, ' | answer = ', props.answer)
    console.log('isCorrect', isCorrect)
    //this.props.dispatch(fetchAnswer(isCorrect));
    e.target.userAnswer.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="userAnswer"
          id="userAnswer"
          className="text"
          maxLength="100"
          autoComplete="off"
          placeholder="Translate word to English  "
          onChange={e => console.log(e.target.value)}
        />
        <br />
        <input
          type="submit"
          id="answerButton"
          className="btn btn-primary btn-sm"
          name="submit"
          value="Check"
        />
      </form>
    </div>
  );
}

export default requiresLogin()(Answer);
