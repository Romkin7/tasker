import React from 'react';
import './Input.scss';

const Input = ({ formField, handleChange, value, errorText }) => {
    const { id, name, label, type, required, readonly } = formField;
    return (
        <div className={'mb-3'}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                className={`form-control input`}
                type={type}
                name={name}
                readOnly={readonly}
                required={required}
                value={value}
                onInput={(event) => handleChange(event)}
            />
            {errorText && <p className="error-text">{errorText}</p>}
        </div>
    );
};

export default Input;
