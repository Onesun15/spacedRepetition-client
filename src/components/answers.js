import React, { Component } from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';

import { fetchNext, fetchAnswer } from '../actions/answers';

import * as actions from '../actions/answers';

export class Answer extends Component {
	render() {
		if (this.props.questions === undefined) {
			return <h1>Loading....</h1>;
		}

		const theAnswer = this.props.answerObject.questions.map((answer, index) => {
			return answer.answer;
		});

		const onSubmit = e => {
			e.preventDefault();
			let submittedAnswer = e.target.userAnswer.value;
			let isCorrect = false;
			let score = 0;
			for (let i = 0; i < theAnswer.length; i++) {
				var answerItem = theAnswer[i];
				if (answerItem === submittedAnswer) {
					isCorrect = true;
					score += 1;
				}
			}
			this.props.dispatch(actions.fetchAnswer(isCorrect));
			this.props.dispatch(actions.fetchScoreSuccess(score));
			e.target.userAnswer.value = '';
		};

		return (
			<div>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						name="userAnswer"
						id="userAnswer"
						className="text"
						maxLength="100"
						autoComplete="off"
						placeholder="Input English Word  "
						onChange={e => console.log(e.target.value)}
					/>
					<br />
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

const mapStateToProps = state => ({
	username: state.auth.currentUser.username,
	answerObject: state.answers.data.answer,
	questions: state.questions.data.question,
	next: state.next.data,
	runningScore: state.answers.score,
});
export default requiresLogin()(connect(mapStateToProps)(Answer));
