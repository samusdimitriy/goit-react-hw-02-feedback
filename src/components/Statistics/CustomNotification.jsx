import React from 'react';
import PropTypes from 'prop-types';
import './CustomNotification';

const CustomNotification = ({ message }) => {
  return <p className="notification_text">{message}</p>;
};

CustomNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomNotification;
