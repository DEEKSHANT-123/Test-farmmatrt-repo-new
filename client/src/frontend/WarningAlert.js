import React from 'react';
import './WarningAlert.css'; // make sure to create this CSS file

const WarningAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="warning-alert">
      {message}
    </div>
  );
};

export default WarningAlert;
