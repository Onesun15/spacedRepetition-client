import React, { Component } from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';

import * as actions from '../actions/answers';

export class ScoreCard extends Component {
	render() {
		return (
			<div className="scoreCardWrapper">
				<div className="dashboard-username">{this.props.username}</div>
				<div className="userScore">Score: {this.props.runningScore}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.currentUser.username,
	runningScore: state.answers.score,
});
export default requiresLogin()(connect(mapStateToProps)(ScoreCard));
