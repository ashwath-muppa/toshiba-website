import React from 'react';

const VisualPlaceholder = ({ title, description, height = "h-64", className = "" }) => {
    return (
        <div className={`w-full ${height} bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center ${className}`}>
            <div className="text-gray-400 font-bold text-xl mb-2">{title}</div>
            {description && <div className="text-gray-500">{description}</div>}
        </div>
    );
};

export default VisualPlaceholder;
