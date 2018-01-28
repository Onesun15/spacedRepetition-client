import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import NextQuestion from './next-question';
import Answer from './answers';
import { fetchQuestion } from '../actions/questions';
import { fetchNext, fetchAnswer } from '../actions/answers';

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      str: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion());
    this.props.dispatch(fetchAnswer());
    this.props.dispatch(fetchNext());
  }

  correctStr() {
    this.setState({ str: 'Correct! go again' });
  }

  incorrectStr() {
    this.setState({ str: 'Sorry, try again....' });
  }

  emptyStr() {
    this.setState({ str: '...' });
  }

  render() {
    if (this.props.questions === undefined) {
      return <h1>Loading....</h1>;
    }

    //console.log('THIS.PROPS DASHBOARD question= ', this.props.questions);
    //console.log('THIS.PROPS DASHBOARD answer= ', this.props.answers.questions);
    //console.log('THIS.PROPS DASHBOARD next= ', this.props.next);
    return (
      <div className="container col-md-10 center-block text-center">
        <div className="dashboard">
          <div className="dashboard-username">
            Username: {this.props.username}
            {/* <div>{this.state.str}</div> */}
          </div>
          <NextQuestion next={this.props.next} />
          <Answer
            answer={this.props.answers.questions}
            next={this.props.next}
            correctStr={() => this.correctStr()}
            incorrectStr={() => this.incorrectStr()}
            strState={this.state.str}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log('DASHBOARD-STATE', state);
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    questions: state.questions.data.question,
    answers: state.answers.data.answer,
    next: state.next.data,
    loading: state.questions.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
