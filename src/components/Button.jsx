import React from 'react';
import './button.css';

const Button = ({ show, onClick }) => {
  return (
    <button className="Button" style={{ display: show ? 'block' : 'none' }} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
