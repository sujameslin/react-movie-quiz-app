import React, { PropTypes } from 'react';

const Answer = ({ answer, handleAnswerClick }) => {
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick}>
        <span className="question-answer-text">{answer}</span>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
