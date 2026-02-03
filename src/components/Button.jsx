import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', icon = null }) => {
    const baseStyles = "group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl transition-all duration-300";

    const variants = {
        primary: "bg-gradient-to-r from-secondary to-green-400 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0",
        outline: "bg-transparent border-2 border-secondary text-secondary hover:bg-green-50 hover:border-green-400 hover:-translate-y-0.5",
        white: "bg-white text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        ghost: "bg-transparent text-primary hover:bg-blue-50",
        accent: "bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    const content = (
        <>
            {icon && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
            <span>{children}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </>
    );

    if (to) {
        return (
            <Link to={to} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {content}
        </button>
    );
};

export default Button;
