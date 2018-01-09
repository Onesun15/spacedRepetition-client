import React from 'react';

export default function Answer(props) {
  const onSubmit = e => {
    e.preventDefault();
    e.target.userAnswer.value = '';
  };

  return (
    <div>
      SpanishWord
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
        placeholder="English word"
      />
      <input
        type="submit"
        id="answerButton"
        className="button"
        name="submit"
        value="Check"
        onClick={() => props.tester()}
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
