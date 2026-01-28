import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md transition-all duration-200 shadow-sm hover:shadow-md";

    const variants = {
        primary: "bg-secondary text-white hover:bg-green-700",
        outline: "bg-transparent border-secondary text-secondary hover:bg-green-50",
        white: "bg-white text-primary hover:bg-gray-50"
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;
