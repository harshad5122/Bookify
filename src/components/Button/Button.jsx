import React from "react";

const Button = ({ type = 'button', onClick, className = '', children, disabled = false }) => {
    return (
        <div className="d-flex justify-content-center">
            <button
                type={type}
                className={`btn ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    )
}

export default Button;