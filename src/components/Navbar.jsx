import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'The Science', path: '/the-science' },
        { name: 'Impact', path: '/impact' },
        { name: 'Bibliography', path: '/bibliography' },
        { name: 'About Us', path: '/about-us' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-lg'
                : 'bg-white/70 backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="group flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent font-heading">
                                CARBONWEAR
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                            ? 'text-primary bg-blue-50'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-blue-50 focus:outline-none transition-all duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-primary font-bold bg-gradient-to-r from-blue-50 to-green-50'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
