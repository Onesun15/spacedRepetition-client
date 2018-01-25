import React from 'react';
import requiresLogin from './requires-login';


function Question(props) {
console.log('QUESTIONS-COMPONENT', props.next)
  return (
    <div>
      <h3>Spanish word is:</h3>
          <h2 className="spanish_question">{props.next}</h2> 
    </div>
  );
}

export default requiresLogin()(Question)