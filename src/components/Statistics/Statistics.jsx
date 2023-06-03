import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';
import CustomNotification from './CustomNotification';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  const renderFeedbackSection = () => {
    const positivePercentage =
      positiveFeedback === 'NaN%' ? 0 : positiveFeedback;

    if (total === 0) {
      return <CustomNotification message="There is no feedback" />;
    } else {
      return (
        <>
          <p className="text_good">Good: {good}</p>
          <p className="text_neutral">Neutral: {neutral}</p>
          <p className="text_bad">Bad: {bad}</p>
          <p className="text_total">Total: {total}</p>
          <p className="text_feedback">
            Positive feedback: {positivePercentage}
          </p>
        </>
      );
    }
  };

  return <div className="container">{renderFeedbackSection()}</div>;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
