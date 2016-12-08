import React, { PropTypes } from 'react';
import Question from './Question';

const QuestionList = ({ questions, handleAnswerClick }) => {
  return (
    <div className="question-list">
      {questions.map((question, idx) => {
        return (
          <Question
            key={idx}
            picture={question.picture}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default QuestionList;
