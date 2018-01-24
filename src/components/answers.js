import React from 'react';
import { connect } from 'react-redux';
import { fetchAnswer, fetchNext, } from '../actions/answers';
import { fetchQuestion } from '../actions/questions';


export class Answer extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchQuestion());
  }
 
  onSubmit = e => {
    e.preventDefault();
    const isCorrect = e.target.userAnswer.value === this.props.answer;
    // console.log('value', e.target.userAnswer.value, 'answer', this.props.answer)
    //console.log('isCorrect', isCorrect)
    this.props.dispatch(fetchAnswer(isCorrect));
    e.target.userAnswer.value = '';
  };
  render() {
    //console.log('+++props questions+++', this.props.question)
   // console.log('props answer', this.props.answer)
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
            onChange={e => console.log(e.target.value)}
          />
          <br/>
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
}

const mapStateToProps = state => {
  //console.log('MapPropsToStateAnswers', state.questions.data)
  const { currentUser } = state.auth;
  return {
    answer: state.questions.data,
    questions: state.questions.data.question,
  };
};

export default connect()(Answer);