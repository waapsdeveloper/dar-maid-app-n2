import React from 'react';

const DeleteConfirmationPopup = ({ isOpen, title, message, onConfirm, onCancel }) => {
  return (
    <div className={`delete-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-inner">
        <div className="popup-title">
          <h4>{title}</h4>
        </div>
        <div className="popup-content">
          <p>{message}</p>
        </div>
        <div className="popup-buttons">
          <button className="theme-btn btn-style-one" onClick={onConfirm}>
            Yes
          </button>
          <button className="theme-btn btn-style-two" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;