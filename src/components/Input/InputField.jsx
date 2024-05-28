import React, { useState } from "react";

const InputField = ({ label, type = 'text', name, value, onChange, className='', placeholder, required = false, maxLength, onLimitExceed, displayCount = false }) => {

    const [charCount, setCharCount] = useState(value?.length)

    const handleChange = (e) => {
        if (maxLength && e.target.value.length > maxLength) {
            if (onLimitExceed) {
                onLimitExceed();
            }
            return;
        }
        setCharCount(e.target.value.length);
        onChange(e);
    }
    return (
        <div className="mb-3">
            {label && <label htmlFor={name} className="form-label">{label}</label>}
            <input
                type={type}
                className={`form-control ${className}`}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                maxLength={maxLength}
            />
            {displayCount && maxLength && (
                <small className="text-muted">
                    {charCount}/{maxLength} characters
                </small>
            )}
        </div>
    )
}

export default InputField;