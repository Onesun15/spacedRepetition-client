import React from 'react';

export default function Answer(props) {
  console.log(props.answer.questions[0].english)
  const onSubmit = e => {
    e.preventDefault();
    if(e.target.userAnswer.value === props.answer.questions[0].english) {
     console.log('correct!')
    }
    e.target.userAnswer.value = '';
  };

  return (
    <div>
      <form
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <input
          type="text"
          name="userAnswer"
          id="userAnswer"
          className="text"
          maxLength="100"
          autoComplete="off"
          placeholder="Translate word to English"
          onChange={e => console.log(e.target.value)}
        />
        <input
          type="submit"
          id="answerButton"
          className="button"
          name="submit"
          value="Check"
          onClick={() => props.clickCheck()}
        />
      </form>
    </div>
  );
}

// return (
//   <form onSubmit={onSubmit}>
//     <button className="answer-button" onClick={() => props.tester()}>
//       Answer
//     </button>
//   </form>
// );
// }
