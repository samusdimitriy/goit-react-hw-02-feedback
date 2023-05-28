import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="container">
      <div className="wrap">
        {options.map(option => (
          <button
            className="btn"
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
