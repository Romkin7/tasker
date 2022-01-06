import React from 'react';

const Button = ({ type, children, disabled, handleClick }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className="btn btn-success"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
