
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 dark:text-gray-400 glass border-t-0">
            <div className="container mx-auto px-6">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} Deiaa Mohamed. All rights reserved.
                </p>
                <p className="text-sm">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
