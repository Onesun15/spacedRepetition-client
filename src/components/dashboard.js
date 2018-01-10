import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
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
    this.props.dispatch(fetchQuestion());
  }

  increament() {
    if (this.state.count < 9) {
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count === 8) {
      this.setState({ questionCount: 'Last One!, click check to restart' });
    }
    if (this.state.count === 9) {
      this.props.dispatch(fetchQuestion());
      this.setState({ count: 0 });
      this.setState({ questionCount: '' });
    }
  }

  render() {
    if (this.props.questions.length === 0) {
      return <h1>Loading....</h1>;
    }
    console.log(this.props)
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <Question text={this.props.questions[0].spanish} />
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
