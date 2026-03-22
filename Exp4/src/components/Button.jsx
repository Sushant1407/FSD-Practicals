import React from 'react';

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button onClick={onClick} data-testid="custom-button" className={`primary-button ${className}`.trim()}>
      {text}
    </button>
  );
};

export default Button;