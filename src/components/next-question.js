import React from 'react';
import requiresLogin from './requires-login';


function NextQuestion(props) {
//console.log('NEXT-QUESTION-COMPONENT', props.next)
  return (
    <div>
      <h3>Spanish word is:</h3>
          <h2 className="spanish_question">{props.next}</h2> 
    </div>
  );
}

export default requiresLogin()(NextQuestion)