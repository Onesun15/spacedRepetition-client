import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Question from './question';
import Answer from './answers2';
import { fetchQuestion } from '../actions/questions';

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchQuestion());
  }

  render() {
   
  //   if (!this.props.questions.questions) {
  //     return <h1>Loading....</h1>;
  //  }
    // console.log(this.props.questions.questions.question)
    //this.props.questions.questions ?  console.log(this.props.questions.questions.question) : null;
    // const questions = this.props.questions.map((question, index) => (
    //   <div className="questions-list" key={index}>
    //       <div className="spanish">{question.spanish}</div>
    //       <div className="english">{question.english}</div>
    //   </div>
    //));
    return (
      // <div> Hello World</div>
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
     
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('statequestions', state.questions.data)
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    //questions: state.questions.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

//export default Dashboard;