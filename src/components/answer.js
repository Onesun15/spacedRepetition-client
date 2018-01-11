import React from 'react';
import { connect } from 'react-redux';
import { fetchAnswer } from '../actions/answers';


export function Answer(props) {
  //console.log(props.questions.answer)
  const onSubmit = e => {
    e.preventDefault();
    // const isCorrect = e.target.userAnswer.value === props.answer;
    // props.dispatch(fetchAnswer(isCorrect));
    e.target.userAnswer.value = '';
  };

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
          // onClick={() => props.clickCheck()}
        />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
  //answer: state.answer.questions.questions.answer
  };
};

export default connect(mapStateToProps)(Answer);
