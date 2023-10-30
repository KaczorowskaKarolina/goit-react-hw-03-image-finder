import React from 'react';
import './styles.css';

const Modal = ({ show, imageUrl, onClose }) => {
  const handleCloseModal = (e) => {
    if (e.target.className === 'Overlay') {
      onClose();
    }
  };

  return (
    show && (
      <div className="Overlay" onClick={handleCloseModal}>
        <div className="Modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    )
  );
};

export default Modal;
