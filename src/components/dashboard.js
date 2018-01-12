import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Question from './question';
import Answer from './answers';
import { fetchQuestion } from '../actions/questions';
import { fetchNext, fetchAnswer } from '../actions/answers';

export class Dashboard extends React.Component {

  componentDidMount() {
    // this.props.dispatch(fetchQuestion())
    this.props.dispatch(fetchNext());
    // this.props.dispatch(fetchAnswer());
  }

  render() {
    console.log('THIS.PROPS QUESTIONS = ', this.props.questions)
    // console.log('THIS.PROPS answer= ', this.props.answer)
   
    if (!this.props.questions) {
      return <h1>Loading....</h1>;
   }
    // console.log(this.props.questions.questions.question)
    //this.props.questions.questions ?  console.log(this.props.questions.questions.question) : null;
    // const questions = this.props.questions.map((question, index) => (
    //   <div className="questions-list" key={index}>
    //       <div className="spanish">{question.spanish}</div>
    //       <div className="english">{question.english}</div>
    //   </div>
    //));
    return (
      <div class="container">
      <div class="row">
      <div class="col-md-2 col-md-offset-5">

      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
          <p>{this.props.answer}</p>
        </div>
          <Question />
         <Answer question={this.props.questions}
            answer={this.props.answer} /> 
      </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'STATE')
  console.log(state.questions.data.question, '_+_+_+_')
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    questions: state.questions.data.question,
    answer: state.questions.data.answer
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
