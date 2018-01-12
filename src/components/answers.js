import React from 'react';
import { connect } from 'react-redux';
import { fetchAnswer, fetchNext } from '../actions/answers';


export class Answer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNext());
  }
  onSubmit = e => {
    e.preventDefault();
    const isCorrect = e.target.userAnswer.value === this.props.answer;
    this.props.dispatch(fetchAnswer(isCorrect));
    e.target.userAnswer.value = '';
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.onSubmit(e);
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

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    questions: state.questions.data
  };
};

export default connect(mapStateToProps)(Answer);