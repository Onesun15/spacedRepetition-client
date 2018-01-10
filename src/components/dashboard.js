import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import Question from './question';
import Answer from './answer';
import { fetchQuestion } from '../actions/questions';

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      questionCount: ''
    };
  }
  componentDidMount() {
    //this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchQuestion());
  }

  increament() {
    if (this.state.count < 9) {
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count === 8) {
      this.setState({ questionCount: 'Last One!, click check to restart' });
    }
    if (this.state.count == 9) {
      this.props.dispatch(fetchQuestion());
      this.setState({ count: 0 });
      this.setState({ questionCount: '' });
    }
  }

  render() {
    if (this.props.questions.length === 0) {
      return <h1>Loading....</h1>;
    }
    // const questions = this.props.questions.map((question, index) => (
    //   <div className="questions-list" key={index}>
    //       <div className="spanish">{question.spanish}</div>
    //       <div className="english">{question.english}</div>
    //   </div>
    //));
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <Question
          spanish={this.props.questions[this.state.count].spanish}
          english={this.props.questions[this.state.count].english}
        />
        <Answer clickCheck={() => this.increament()} answer={this.props}/>
        {this.state.questionCount}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    questions: state.questions.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
