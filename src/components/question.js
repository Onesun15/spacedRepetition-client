import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';

function Question(props) {
console.log('QUESTIONS-COMPONENT', props.questions)
  return (
    <div>
      <h3>Spanish word is:</h3>
          <h2 className="spanish_question">{props.questions}</h2> 
    </div>
  );
}

export default requiresLogin()(Question)