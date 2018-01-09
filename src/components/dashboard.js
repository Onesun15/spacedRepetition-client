import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import Question from './question';
import { fetchQuestion } from '../actions/questions';

export class Dashboard extends React.Component {
  componentDidMount() {
    //this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchQuestion());
  }

  render() {
    if(!this.props.questions.length > 0) {
        return <h1>Loading....</h1>;
    }
    console.log('properties', this.props.questions[0].spanish);
    // const questions = this.props.questions.map((index, question) => {
    //     console.log(index, question)
    // })
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        {/* <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">Protected data: {this.props.protectedData} </div> */}
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