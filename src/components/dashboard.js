import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Question from './question';
import Answer from './answers';
import { fetchQuestion } from '../actions/questions';
import { fetchNext, fetchAnswer } from '../actions/answers';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestion());
    this.props.dispatch(fetchAnswer());
    this.props.dispatch(fetchNext());
  }

  render() {
    // console.log('THIS.PROPS answer= ', this.props.answer)

    if (!this.props) {
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
    console.log('THIS.PROPS DASHBOARD = ', this.props.questions);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-md-offset-5">
            <div className="dashboard">
              <div className="dashboard-username">
                Username: {this.props.username}
                <p>{this.props.answer}</p>
              </div>
              <Question questions={this.props.questions} />
              <Answer
                question={this.props.questions}
                answer={this.props.answers}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const questions = state.questions.data ? state.questions.data.questions:false;
  console.log('DASHBOARD-STATE', state, 'ques', state.questions.data);
  //console.log(state.questions.data.question, '_+_+_+_');
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    questions: state.questions.data.question,
    answers: state.answers.data.answer,
    next: state.questions.data.next
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
