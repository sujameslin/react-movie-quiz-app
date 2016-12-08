import React, { PropTypes } from 'react';
import Answer from './Answer';

const Question = ({ question, picture, answers, handleAnswerClick }) => {
  return (
    <div className="question">
      <picture>
        <img src={picture} />
      </picture>
      <div className="question-text">
        <h3>{question}</h3>
      </div>
      <ol className="question-answers">
        {answers.map(answer => {
          return (
            <Answer
              key={answer}
              answer={answer}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </ol>
    </div>
  );
}

Question.propTypes = {
  picture: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
