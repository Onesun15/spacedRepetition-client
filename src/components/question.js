import React from 'react';
import { connect } from 'react-redux';

function Question(props) {
  console.log(props.question, 'props.question')
  return (
    <div>
      <h3>Spanish word is:</h3>
          <h2 className="spanish_question">{props.questions}</h2> 
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, 'STATE')
  return {
    questions: state.questions.data.question,
    answer: state.questions.data.answer
  };
};

export default connect(mapStateToProps)(Question);