import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'The Science', path: '/the-science' },
        { name: 'Impact', path: '/impact' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading">
                                CARBONWEAR
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A complementary climate solution for 2036. Making carbon removal as simple as getting dressed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission Statement */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Our Mission</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Enabling billions to participate in climate action through everyday clothing. Together, we can make a difference.
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-xs text-gray-400">Working towards a sustainable future</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CarbonWear. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/bibliography" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Bibliography
                        </Link>
                        <Link to="/about-us" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
