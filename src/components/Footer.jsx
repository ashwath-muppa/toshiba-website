import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <p className="text-gray-500 text-lg">
                    A complementary climate solution for 2036
                </p>
                <p className="text-gray-400 text-sm mt-4">
                    © {new Date().getFullYear()} CarbonWear. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
